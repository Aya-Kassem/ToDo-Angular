import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';
import { Task } from '../task';
import { SharedService } from 'src/app/Services/shared.service';
import { BehaviorSubject, catchError, switchMap, throwError } from 'rxjs';
import { UserSettingService } from 'src/app/Services/user-setting.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add-new-task',
    templateUrl: './add-new-task.component.html',
    styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent {
    taskForm!: FormGroup;
    allTasks: Task[] = [];
    selectedTask!: number;
    categories: String[] = ['Work', 'Personal'];
    status = ['Open', 'Running', 'Closed'];
    message!: string;
    result: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    removeTaskReq: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    removeTasksMsg: string = 'Are You Sure You Want to Delete this Task?!'
    notification: string = 'notification';
    isNewTask!: boolean;
    isLoaded: boolean = false;
    subTaskIndex!: number;
    showDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isTaskClosed!: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private _TasksService: TasksService,
        private _ActivatedRoute: ActivatedRoute,
        private datePipe: DatePipe,
        private _Router: Router,
        private _SharedService: SharedService,
        private _UserSettingService: UserSettingService
    ) { }

    ngOnInit(): void {
        this._UserSettingService.categories.subscribe((res) => {
            if (res.length) {
                this.categories = [...this.categories, ...res];
            }
        });

        this.createTaskForm();
        this.getUrlParams();
    }

    createTaskForm() {
        this.taskForm = this.formBuilder.group({
            taskTitle: new FormControl('', [Validators.required]),
            taskDate: '',
            taskCategory: new FormControl(''),
            taskStatus: '',
            subTasks: this.formBuilder.array([])
        });

    }

    getPreviousUrl() {
        let previousUrl = this._ActivatedRoute.snapshot.queryParamMap.get('url');
        previousUrl = `tasks/${previousUrl}`;
        console.log(previousUrl);
        this._Router.navigate([previousUrl]);
        return previousUrl
    }

    getUrlParams() {
        let queryParamDate = this._ActivatedRoute.snapshot.queryParamMap.get('date');
        let queryParamIndex = this._ActivatedRoute.snapshot.queryParamMap.get('index');

        if (queryParamDate) {
            var date;
            date = queryParamDate.length > 10 ? queryParamDate.split('T')[0] : queryParamDate
            this.taskForm.controls['taskDate'].setValue(date);
            this.isLoaded = true;
            this.isNewTask = true;
        } else if (queryParamIndex) {
            this.selectedTask = +queryParamIndex;
            this.isNewTask = false;
            this.getTaskByIndex(this.selectedTask);
        } else {
            this.isNewTask = true;
            this.isLoaded = true;
        }
    }

    get subTasks() {
        return this.taskForm.get('subTasks') as FormArray;
    }

    addSubTask() {
        const subTaskFormGroup = this.formBuilder.group({
            title: '',
            status: 'Open'
        });
        this.subTasks.push(subTaskFormGroup);
    }

    removeSubTask(index: number) {
        this.subTasks.removeAt(index);
    }

    setDefaultValues() {
        if (this.taskForm.controls['taskCategory'].value === '') {
            this.taskForm.controls['taskCategory'].setValue('Work')
        }
        if(this.taskForm.controls['taskStatus'].value === '' && this.isNewTask){
            this.taskForm.controls['taskStatus'].setValue('Open');
        }
        this.taskForm.controls['taskDate'].setValue(this.changeDateFormat());
    }

    createTask() {
        if (!this.taskForm.valid) return
        this.setDefaultValues();
        this._TasksService.getallTasks().pipe(
            switchMap((tasks) => {
                this.allTasks = tasks || [];
                this.allTasks.push(this.taskForm.value);

                return this._TasksService.createTasks(this.allTasks).pipe(
                    catchError((error) => {
                        return throwError(() => new Error('Something went wrong while saving tasks. Please try again.'));
                    })
                );

            }),
            catchError((error) => {
                return throwError(() => new Error('Something went wrong while retrieving tasks. Please try again.'));
            })).subscribe({
                complete: () => {
                    this.message = 'Task Added Successfully!';
                    this.result.next(true);

                    this._SharedService.getAllData();
                    this.taskForm.reset();
                    this.subTasks.controls = [];
                }
            });

    }

    changeDateFormat() {
        let userDate = this.taskForm.controls['taskDate'].value;
        if (!userDate) {
            userDate = new Date();
        }
        return this.datePipe.transform(userDate, 'yyyy-MM-dd');
    }

    getTaskByIndex(index: number) {
        this._TasksService.getTask(index).subscribe((task) => {
            if (task) {
                this.isTaskClosed = task.taskStatus === 'Closed' ? true : false;
                this.taskForm.patchValue({
                    taskTitle: task.taskTitle,
                    taskDate: task.taskDate,
                    taskCategory: task.taskCategory,
                    taskDesc: task.taskDesc,
                    taskStatus: task.taskStatus
                });

                if (task.subTasks) {
                    task.subTasks.forEach((subTask: { title: string, status: string }) => {
                        this.subTasks.push(this.formBuilder.group(subTask));
                    });
                }
                this.isLoaded = true;
                // this.hideSpinner();
            }
        });
    }

    hideSpinner() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 200)
    }

    editTask() {
        let taskStatus = this.taskForm.controls['taskStatus'].value;
        let isAllow = this.checkTaskChildren(taskStatus);
        if ((taskStatus === 'Closed' && isAllow) || taskStatus === 'Open' || taskStatus === 'Running') this.confirmEditTask()
    }

    toastClosed(val: boolean) {
        if (val && !this.isNewTask) this._Router.navigate([`/${this.getPreviousUrl()}`])
    }

    confirmEditTask() {
        this.taskForm.controls['taskDate'].setValue(this.changeDateFormat());
        if (!this.isTaskClosed || this.taskForm.controls['taskStatus'].value != 'Closed') {
            this._TasksService.editTask(this.selectedTask, this.taskForm.value).subscribe({
                next: (res) => {
                    if (res) {
                        this.message = 'Changes Applied Successfully!';
                        this.result.next(true);
                    }
                },
                error: (e) => throwError(() => new Error('Error While Updating Task: ', e)),
                complete: () => this._SharedService.getAllData()
            });
        } else {
            this.message = 'Can`t Change Closed Tasks, Please Reopen the Task First';
            this.showDialog.next(true);
        }
    }

    checkTaskChildren(status: string) {
        let allowClose = true;
        let subTasks = this._SharedService.isAllowedToCloseTask(this.taskForm.value);
        if ( (status === 'Closed' && !this.isTaskClosed) && (subTasks.openSubTasks || subTasks.runningSubTask)) {
            this.message = 'Can`t Close This Task, Not All SubTasks are Finished';
            this.showDialog.next(true);
            allowClose = false;
        }

        if(status != 'Running' && subTasks.runningSubTask ){
            this.taskForm.controls['taskStatus'].setValue('Running');
        }
        return allowClose;
    }

    deleteTask() {
        this.removeTaskReq.next(true)
    }

    confirmTaskRemoved(response: boolean) {
        if (response) {
            this._TasksService.deleteTask(this.selectedTask).subscribe({
                next: (res) => {
                    this.message = 'Task Deleted Successfully!';
                    this.result.next(true);
                    this._SharedService.getAllData();
                },
                error: (e) => { return throwError(() => new Error('Error While Deleteing Task: ', e)) },
                complete: () => setTimeout(() => {
                    this._Router.navigate(['tasks/todayTasks'])
                }, 1200)

            })
        }
    }

    subTaskStatusChange(i: number, taskStatus: string) {
        this.showDialogMsg(taskStatus);
        this.subTaskIndex = i;
        let subTaskStatus = document.querySelector(`[status=status-${i}]`) as HTMLElement;
        subTaskStatus.style.display = 'none';
        this.closeAndReOpenSubTasks(i,taskStatus);
    }

    closeAndReOpenSubTasks(i: number, status: string) {
        let subTaskTitle = document.querySelector(`[title=title-${this.subTaskIndex}]`) as HTMLElement;
        status === 'Closed' ? subTaskTitle.classList.add('closedSubTasks') : subTaskTitle.classList.remove('closedSubTasks');
        const formArray = this.taskForm.controls['subTasks'] as FormArray;
        formArray.controls[i].value.status = status;  
    }

    showDialogMsg(status: string) {
        const applyChange = status === 'Closed' ? 'Close' : 'Start';
        this.message = `Please Save Changes to ${applyChange} this SubTask`;
        this.showDialog.next(true);
    }
}





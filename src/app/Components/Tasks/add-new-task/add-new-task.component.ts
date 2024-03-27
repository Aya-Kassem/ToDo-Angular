import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';
import { Task } from '../task';
import { SharedService } from 'src/app/Services/shared.service';
import { BehaviorSubject, catchError, switchMap, throwError } from 'rxjs';
import { UserSettingService } from 'src/app/Services/user-setting.service';


@Component({
    selector: 'app-add-new-task',
    templateUrl: './add-new-task.component.html',
    styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent {
    taskForm!: FormGroup;
    defaultCategory: string = 'Work';
    defaultTaskStatus: string = 'Open';
    allTasks: Task[] = [];
    selectedTask!: number;
    newTask: boolean = true;
    categories: String[] = ['Work', 'Personal'];
    status = ['Open', 'Running', 'Closed'];
    message!: string;
    result: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    removeTaskReq: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    removeTasksMsg: string = 'Are You Sure You Want to Delete this Task?!'
    notification: string = 'notification';
    showStatusDropDown: boolean = false;

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
            if(res.length){
                this.categories = [...this.categories, ...res];
            }
        });

        this.createTaskForm();
        this.getUrlParams();
    }
    createTaskForm() {
        this.taskForm = this.formBuilder.group({
            taskTitle: new FormControl('', [Validators.required]),
            taskDesc: new FormControl(''),
            taskDate: '',
            taskCategory: new FormControl('', [Validators.required]),
            taskStatus: '',
            subTasks: this.formBuilder.array([] as FormControl[])
        });
    }
    getPreviousUrl() {
        let previousUrl = this._ActivatedRoute.snapshot.queryParamMap.get('url');
        this._Router.navigate([`/${previousUrl}`])
        return previousUrl
    }

    getUrlParams() {
        let queryParamDate = this._ActivatedRoute.snapshot.queryParamMap.get('date');
        let queryParamIndex = this._ActivatedRoute.snapshot.queryParamMap.get('index');

        if (queryParamDate) {
            var date;
            date = queryParamDate.length > 10 ? queryParamDate.split('T')[0] : queryParamDate
            this.taskForm.controls['taskDate'].setValue(date);
            this.showStatusDropDown = true;
        } else if (queryParamIndex) {
            this.selectedTask = +queryParamIndex;
            this.newTask = false;
            this.getTaskByIndex(this.selectedTask);
            this.showStatusDropDown = true;
        }
    }

    get subTasks() {
        return this.taskForm.get('subTasks') as FormArray;
    }

    addSubTask() {
        this.subTasks.push(this.formBuilder.control(''));
    }

    removeSubTask(index: number) {
        this.subTasks.removeAt(index);
    }

    createTask() {
        if (!this.taskForm.valid) return
        this.taskForm.controls['taskDate'].setValue(this.changeDateFormat());
        if (!this.showStatusDropDown) this.taskForm.controls['taskStatus'].setValue('Open')

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
                this.taskForm.patchValue({
                    taskTitle: task.taskTitle,
                    taskDate: task.taskDate,
                    taskCategory: task.taskCategory,
                    taskDesc: task.taskDesc,
                    taskStatus: task.taskStatus
                });

                if (task.subTasks) {
                    task.subTasks.forEach((subTask: { title: string }) => {
                        this.subTasks.push(this.formBuilder.control(subTask));
                    });
                }

            }
        });
    }

    editTask() {
        this.taskForm.controls['taskDate'].setValue(this.changeDateFormat());
        this._TasksService.editTask(this.selectedTask, this.taskForm.value).subscribe({
            next: (res) => {
                if (res) {
                    this.message = 'Changes Applied Successfully!';
                    this.result.next(true);
                }
            },
            error: (e) => throwError(() => new Error('Error While Updating Task: ', e)),
            complete: () => {
                this._SharedService.getAllData()
                setTimeout(() => {
                    this._Router.navigate([`/${this.getPreviousUrl()}`])
                }, 1200)
            }
        });
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

}





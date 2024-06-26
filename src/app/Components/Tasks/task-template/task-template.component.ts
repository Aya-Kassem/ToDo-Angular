import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';
import { TasksService } from 'src/app/Services/tasks.service';
import { Task } from '../task';

@Component({
    selector: 'app-task-template',
    templateUrl: './task-template.component.html',
    styleUrls: ['./task-template.component.scss']
})
export class TaskTemplateComponent {
    @Input() tasksData: { type: string, tasks: Task[] }[] = [];
    @Input() weekRange!: {start: string, end: string};
    
    currentUrl!: string;
    showContent: boolean = false;
    closeTaskConfirmMsg!: string;
    closeTaskReq: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    taskIndex!: number;
    message!: string;
    result: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    notification: string = 'notification';
    showDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private _Router: Router, private _TaskService: TasksService, private _SharedService: SharedService) { }
    ngOnInit(): void {
        this.currentUrl = this._Router.url;
        setTimeout(() => {
            this.showContent = true;
        }, 1000)
    }

    showTaskDetails(index: number) {
        let url = this._Router.url.split('/')[2];
        this._Router.navigate(['tasks/addNewTask'], { queryParams: { index, url } })
    }

    completeTask(task: Task) {
        this.taskIndex = task.index;
        const status = task.taskStatus;
        status === 'Closed' ? this.deleteTask() : this.checkTaskChildren(task)
    }

    userResponse(response: boolean) {
        if (response) {
            let task = this.tasksData[0].tasks.filter((el) => {
                return el.index === this.taskIndex
            })[0]

            // task.taskStatus === 'Closed' ? this.confirmDelete() : this.checkTaskChildren(task)
            task.taskStatus === 'Closed' ? this.confirmDelete() : this.confirmClose(task)
        }else{
            this.noActionTaken()
        }
    }

    closeTask() {
        this.closeTaskConfirmMsg = 'Are You Sure You Want to Close This Task?!';
        this.closeTaskReq.next(true);
        this.taskLineThroughStyle();
    }

    deleteTask() {
        this.closeTaskConfirmMsg = 'Are You Sure You Want to Delete This Task?!';
        this.closeTaskReq.next(true);
        this.taskLineThroughStyle();
    }

    confirmClose(currentTask: Task) {
        currentTask.taskStatus = 'Closed';
        this._TaskService.editTask(this.taskIndex, currentTask).subscribe({
            next: (res) => {
                this.message = 'Task Closed Successfully!';
                this.result.next(true);
            },
            complete: () => this._SharedService.getAllData()
        })
    }

    checkTaskChildren(task: Task) {
        let taskCheckBox = document.querySelector(`#checkBox-${this.taskIndex}`) as HTMLElement;
        let subTasks = this._SharedService.isAllowedToCloseTask(task);
        if ( subTasks.openSubTasks || subTasks.runningSubTask){
            this.message = 'Can`t Close This Task, Not All SubTasks are Finished';
            this.showDialog.next(true);
            taskCheckBox.classList.contains('checkBoxStyle') ? taskCheckBox.classList.remove('checkBoxStyle') : taskCheckBox.classList.add('checkBoxStyle')
        }else{
            this.closeTask();
        }
        
    }

    confirmDelete() {
        this._TaskService.deleteTask(this.taskIndex).subscribe({
            next: (res) => {
                this.message = 'Task Deleted Successfully!';
                this.result.next(true);
                this._SharedService.getAllData()
            },
            error: (e) => { return throwError(() => new Error('Error While Deleteing Task: ', e)) }
        })
    }

    taskLineThroughStyle() {
        let el = document.querySelector(`#header-${this.taskIndex}`) as HTMLElement;
        let taskCheckBox = document.querySelector(`#checkBox-${this.taskIndex}`) as HTMLElement;
        el.classList.add('lineThrough');
        taskCheckBox.style.cssText = 'background-color: var(--IconsColor); border-color: var(--IconsColor)';
    }

    noActionTaken() {
        let el = document.querySelector(`#header-${this.taskIndex}`) as HTMLElement;
        let taskCheckBox = document.querySelector(`#checkBox-${this.taskIndex}`) as HTMLElement;
        el.classList.remove('lineThrough') 
        taskCheckBox.style.cssText = 'background-color: inherit; border-color: #dee2e6';
    }

    toastClosed(val: boolean) {
        if (val ) this._Router.navigate([`tasks/history`])
    }
}


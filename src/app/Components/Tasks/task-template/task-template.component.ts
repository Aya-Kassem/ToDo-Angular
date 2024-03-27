import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
    currentUrl!: string;
    showContent: boolean = false;
    closeTaskConfirmMsg: string = 'Are You Sure You Want to Close This Task?!';
    closeTaskReq: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    taskIndex!: number;


    constructor(private _Router: Router, private _TaskService: TasksService, private _SharedService :SharedService) { }
    ngOnInit(): void {
        this.currentUrl = this._Router.url;
        setTimeout(() => {
            this.showContent = true;
        }, 1000)
    }

    showTaskDetails(index: number) {
        let url = this._Router.url.split('/')[1];
        this._Router.navigate(['tasks/addNewTask'], { queryParams: { index, url } })
    }

    completeTask(i: number) {
        this.taskIndex = i;
        this.closeTaskReq.next(true);
        let el = document.querySelector(`#header-${this.taskIndex}`) as HTMLElement;
        el.classList.contains('lineThrough') ? el.classList.remove('lineThrough') : el.classList.add('lineThrough');
    }

    confirmCloseTask(response: boolean) {
        if (response) {
            let task = this.tasksData[0].tasks.filter((el) => {
                return el.index === this.taskIndex
            })[0]

            task.taskStatus = 'Closed';
            this._TaskService.editTask(this.taskIndex, task).subscribe({
                next: (res) => this._SharedService.getAllData(),
                complete: () => {
                    this._Router.navigate(['tasks/history'])
                }
            })
        }else{
            let taskTitle = document.querySelector(`#header-${this.taskIndex}`) as HTMLElement;
            let taskCheckBox = document.querySelector(`#checkBox-${this.taskIndex}`) as HTMLElement;
            taskTitle.classList.contains('lineThrough') ? taskTitle.classList.remove('lineThrough') : taskTitle.classList.add('lineThrough');
            taskCheckBox.style.cssText = 'background-color: inherit; border-color: #dee2e6';
        }
    }


}

import { Component } from '@angular/core';
import { Task } from '../task';
import { SharedService } from 'src/app/Services/shared.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss']
})
export class TodayTasksComponent {
  todayTasks!: Task[];
  tasksLoaded: boolean = false;
  getScreenWidth: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private _SharedService: SharedService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this._SharedService.todayTasks.subscribe((tasks) => {
      if (tasks) {
        this.todayTasks = tasks;
        this.tasksLoaded = true;
      }
    })
  }


}

import { Component,OnInit } from '@angular/core';
import { Task } from '../task';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrls: ['./upcoming-tasks.component.scss']
})
export class UpcomingTasksComponent implements OnInit{
  weekTasks!: Task[];
  weekTasksLoaded: boolean = false;
  allTasksNum: number = 0;
  isLoading: boolean = false;
  weekFirstDay!: string;
  weekLastDay!: string;
  constructor(private _SharedService:SharedService) { }

  ngOnInit(): void {
    this.getWeekTasks();
    let weekArray = this._SharedService.getWholeWeekDates();
    this.weekFirstDay = weekArray.at(0)!.slice(5);
    this.weekLastDay = weekArray.at(-1)!.slice(5);
  }

  getWeekTasks(){
    this._SharedService.weekTasks.subscribe((tasks) => {
      if(tasks){
        this.weekTasksLoaded = true;
        this.weekTasks = tasks;
        this.allTasksNum = tasks.length
      }
    })
  }
  
  
}

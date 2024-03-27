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

  constructor(private _SharedService:SharedService) { }

  ngOnInit(): void {
    this.getWeekTasks();
    let ar = this._SharedService.getWholeWeekDates();
    console.log(ar);
    
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

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';
import { Task } from '../task';

@Component({
  selector: 'app-history-tasks',
  templateUrl: './history-tasks.component.html',
  styleUrls: ['./history-tasks.component.scss']
})
export class HistoryTasksComponent {
    historyTasks!: Task[];
    subscription!: Subscription;

    constructor(private _SharedService: SharedService){}
    ngOnInit(){
        this.subscription = this._SharedService.historyTasks.subscribe((tasks) => {
            if(tasks) this.historyTasks = tasks;
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
    
}

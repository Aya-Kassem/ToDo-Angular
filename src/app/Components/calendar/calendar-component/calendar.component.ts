import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { SharedService } from 'src/app/Services/shared.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'
import { UserSettingService } from 'src/app/Services/user-setting.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarView!: string;
  date!: string;

  constructor(
    private _Router: Router,
    private _SharedService: SharedService,
    private _UserSettingService: UserSettingService
  ) { }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, listPlugin, multiMonthPlugin],
    height: '100%',
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next today'
    },
    buttonIcons: {
      prev: 'bi bi-chevron-left',
      next: 'bi bi-chevron-right',
    },
    dateClick: (info: any) => {
      this.date = info.dateStr;
      this._Router.navigate(['tasks/addNewTask'], { queryParams: { date: info.dateStr } });
    }, eventClick: (e: any) => {
      let index = e.event.extendedProps.index;
      this._Router.navigate(['tasks/addNewTask'], { queryParams: { index } })
    }

  };

  ngOnInit(): void {
    this._UserSettingService.view.subscribe((res) => {
      this.calendarOptions.initialView = res;
    })
    this.getTasksEvents()
  }

  getTasksEvents() {
    this._SharedService.allTasksEvents.subscribe((tasks) => {
      tasks.map((task) => {
        if (task.title.length > 15) {
          task.title = task.title.slice(0, 15) + '.....'
        }
      })
      this.calendarOptions.eventSources = [
        {
          events: tasks
        }
      ]

    })
  }


}

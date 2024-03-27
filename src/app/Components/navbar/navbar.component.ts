import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { NavService } from 'src/app/Services/nav.service';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  stickyNotes!: number;
  todayTasksNum!: number;
  calendarEventsNum!: number;
  upcomingTasksNum!: number;
  historyTasksNum!: number;
  allTasksNum!: number;

  constructor(
    private _NavService: NavService,
    private _SharedService: SharedService,
    private _AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this._NavService.getNotes().subscribe(notes => {
      this.stickyNotes = notes ? JSON.parse(notes).length : 0
    });

    this.getTodayTasksCount()
    this.getCalendarEventsCount()
    this.getUpcomingTasksNum()
    this.getHistoryTasksCount()
    this.getAllTasksNum()

  }

  getHistoryTasksCount() {
    this._SharedService.historyTasks.subscribe((res) => {
      this.historyTasksNum = res.length ? res.length : 0
    })
  }

  getTodayTasksCount() {
    this._SharedService.todayTasks.subscribe((tasksNum) => {
      this.todayTasksNum = tasksNum.length ? tasksNum.length : 0
    })
  }

  getCalendarEventsCount() {
    this._SharedService.allTasksEvents.subscribe((events) => {
      this.calendarEventsNum = events.length ? events.length : 0
    })
  }

  getUpcomingTasksNum() {
    this._SharedService.weekTasks.subscribe((count) => {
      this.upcomingTasksNum = count.length ? count.length : 0
    })
  }

  getAllTasksNum() {
    this._SharedService.allTasks.subscribe((count) => {
      this.allTasksNum = count.length ? count.length : 0
    })
  }

  signOut() {
    this._AuthService.logOut();
  }



}

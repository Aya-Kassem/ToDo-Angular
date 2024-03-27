import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TasksService } from './tasks.service';


@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private _TasksService:TasksService) { }
  private savedNotes: BehaviorSubject<string> = new BehaviorSubject<string>('');
  todayTasks!: number;

  setNotes(data: string) {
    localStorage.setItem('allNotes', data);
    this.getNotes()
  }

  getNotes(): Observable<string> {
    const storedNotes = localStorage.getItem('allNotes');
    if (storedNotes) {
      this.savedNotes.next(storedNotes);
    }
    return this.savedNotes.asObservable();
  }
}

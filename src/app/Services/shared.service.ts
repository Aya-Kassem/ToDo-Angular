import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';
import { searchForm, Task, TaskEvent } from '../Components/Tasks/task';
import { TasksService } from './tasks.service';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    todayTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    tomorrowTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    weekTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    historyTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    allTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    allTasksEvents: BehaviorSubject<TaskEvent[]> = new BehaviorSubject<TaskEvent[]>([]);

    retrievedTasks!: Task[];
    resultSubject = new Subject<Task[]>();
    result$ = this.resultSubject.asObservable();

    searchResultsSubject = new Subject<Task[]>();
    searchResults$ = this.searchResultsSubject.asObservable();

    constructor(private _DatePipe: DatePipe, private _TasksService: TasksService) { }

    getTodayTasks() {
        let today = this._DatePipe.transform(new Date(), 'yyyy-MM-dd');
        this.result$.subscribe((tasks) => {
            if (tasks) {
                let allTasks = tasks.filter((el) => {
                    return el.taskDate == today && el.taskStatus != 'Closed'
                });
                this.todayTasks.next(allTasks);
            }
        })
    }

    getCalendarEvents() {
        let currentMonth = this._DatePipe.transform(new Date(), 'yyyy-MM')!;
        this.result$.subscribe((tasks) => {
            if (tasks) {
                let allTasks = tasks.filter((task) => {
                    let formatTaskDate = this._DatePipe.transform(task.taskDate!, 'yyyy-MM')!;
                    return task.taskStatus != 'Closed'
                })

                let arr: TaskEvent[] = [];
                allTasks.forEach((task) => {
                    arr.push({ title: task.taskTitle, start: task.taskDate, index: task.index })
                });
                this.allTasksEvents.next(arr)
            }
        })
    }

    getTasks() {
        this._TasksService.getallTasks()
            .pipe(
                tap((tasks) => {
                    if (tasks) {
                        let allTasks = tasks
                            .map((tasks, index) => {
                                return {
                                    ...tasks,
                                    index: index
                                }
                            })
                            .filter((el) => { return el != null && Object.keys(el).length > 1 });
                        this.resultSubject.next(allTasks)
                    } else {
                        this.resultSubject.next([])
                    }
                })
            ).subscribe()
    }

    getWholeWeekDates() {
        const currentDate = new Date();
        const weekStart = currentDate.getDate() - currentDate.getDay();
        const weekEnd = weekStart + 6;

        const datesArray: string[] = [];

        for (let i = weekStart; i <= weekEnd; i++) {
            const date = new Date(currentDate.setDate(i));
            const transformedDate = this._DatePipe.transform(date, 'yyyy-MM-dd');
            datesArray.push(transformedDate!);
        }
        return datesArray
    }

    getWeekTasks() {
        this.result$.subscribe((tasks) => {
            if (tasks) {
                let allTasks = tasks.filter((el) => {
                    return this.getWholeWeekDates().includes(el.taskDate) && el.taskStatus != 'Closed'
                });
                allTasks = this.sortTasks(allTasks);
                this.weekTasks.next(allTasks)
            }
        })
    }

    sortTasks(tasks: Task[]) {
        let allTasks = tasks.sort((a, b) => {
            const dateA: any = new Date(a.taskDate);
            const dateB: any = new Date(b.taskDate);
            return dateA - dateB
        });
        return allTasks;
    }

    getHistoryTasks() {
        this.result$.subscribe((tasks) => {
            if (tasks) {
                let allTasks = tasks.filter((all: Task) => {
                    return all.taskStatus === 'Closed'
                })
                allTasks = this.sortTasks(allTasks)
                this.historyTasks.next(allTasks)
            }
        })
    }

    getAllTasks() {
        this.result$.subscribe((tasks) => {
            if (tasks) {
                let all = tasks.filter((tasks: Task) => {
                    return tasks.taskStatus != 'Closed'
                })
                all = this.sortTasks(all)
                this.allTasks.next(all)
            }
        })
    }

    getAllData() {
        this.getTasks();
        this.getAllTasks()
        this.getTodayTasks();
        this.getWeekTasks();
        this.getHistoryTasks();
        this.getCalendarEvents();
    }

    searchTasks(searchParams: searchForm) {
        this.getTasks()
        this.getAllTasks()
        if (searchParams) this.getTaskBySearchParam(searchParams)
    }

    getTaskBySearchParam(searchParams: any) {
        let condition = (tasks: Task) => {
            let statusMatch = searchParams.status ? tasks.taskStatus === searchParams.status : true;
            let titleMatch = searchParams.title ? tasks.taskTitle.toLowerCase().includes(searchParams.title.toLowerCase()) : true;
            let categoryMatch = searchParams.category ? tasks.taskCategory === searchParams.category : true;
            let dateMatch = searchParams.date ? this.checkDateInRange(tasks.taskDate, searchParams.date.start, searchParams.date.end) : true;

            return statusMatch && titleMatch && dateMatch && categoryMatch
        }
        this.searchResults(condition);
    }

    searchResults(filterCondition: (task: Task) => boolean) {
        this.allTasks.subscribe((tasks) => {
            if (tasks) {
                let all = tasks.filter(filterCondition);
                all = this.sortTasks(all);
                this.searchResultsSubject.next(all);
            }
        });
    }

    checkDateInRange(taskDate: string, startDate: string | null, endDate: string | null): boolean {
        if (!startDate && !endDate) return true;
        if (!startDate) return taskDate <= endDate!;
        if (!endDate) return taskDate >= startDate;
        
        return taskDate >= startDate && taskDate <= endDate;
    }
    
    isAllowedToCloseTask(task: Task){
        const subTasks = task.subTasks;
        let allowClose;
        let runningSubTask;
        let openSubTasks;
        if(subTasks && subTasks.length){
            runningSubTask = subTasks.find((el) => {return el.status === 'Running'});
            openSubTasks = subTasks.find((el) => {return el.status === 'Open'});
            allowClose = runningSubTask ? false : true;

        }
        return {'allowClose': allowClose, 'runningSubTask': runningSubTask, 'openSubTasks': openSubTasks}
    }

}

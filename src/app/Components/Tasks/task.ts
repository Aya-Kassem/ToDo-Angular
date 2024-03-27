export interface Task {
    taskTitle: string,
    taskDesc: string,
    taskDate: string,
    taskStatus: string,
    taskCategory: string,
    subTasks: [{
        title: string
    }],
    index: number
}


export interface TaskEvent {
    title: string,
    start: string,
    index: number
}

export interface searchForm {
    category: any
    title: string,
    status: string,
    date: { start: string, end: string }
}
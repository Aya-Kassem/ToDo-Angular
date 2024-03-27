import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodayTasksComponent } from "./today-tasks/today-tasks.component";
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";
import { UpcomingTasksComponent } from "./upcoming-tasks/upcoming-tasks.component";
import { HistoryTasksComponent } from "./history-tasks/history-tasks.component";
import { AllTasksComponent } from "./all-tasks/all-tasks.component";



const routes: Routes = [
    { path: '', redirectTo: 'todayTasks', pathMatch: 'full' },
    { path: 'todayTasks', component: TodayTasksComponent},
    { path: 'addNewTask', component: AddNewTaskComponent},
    { path: 'upcoming', component: UpcomingTasksComponent}, 
    { path: 'history', component: HistoryTasksComponent},
    { path: 'allTasks', component: AllTasksComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TasksRouthingModule { }
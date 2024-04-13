import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TasksRouthingModule } from "./tasks.routing.module";
import { AppConfirmDialogModule } from "src/app/Shared/confirm-dialog/confirm-dialog.module";
import { AppToastModule } from "src/app/Shared/toast/toast.module";
import { AppSpinnerModule } from "src/app/Shared/spinner/spinner.module";
import { TaskTemplateComponent } from "./task-template/task-template.component";
import { AllTasksComponent } from "./all-tasks/all-tasks.component";
import { TodayTasksComponent } from "./today-tasks/today-tasks.component";
import { HistoryTasksComponent } from "./history-tasks/history-tasks.component";
import { UpcomingTasksComponent } from "./upcoming-tasks/upcoming-tasks.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { AppDialogModule } from "src/app/Shared/dialog/dialog.module";


@NgModule({
    declarations: [
        TaskTemplateComponent,
        AllTasksComponent,
        TodayTasksComponent,
        HistoryTasksComponent,
        UpcomingTasksComponent,
        AddNewTaskComponent
    ],
    imports: [
        CommonModule, 
        TasksRouthingModule,
        AppConfirmDialogModule,
        AppToastModule,
        AppSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        AppSpinnerModule,
        AppToastModule,
        AppConfirmDialogModule,
        DropdownModule,
        CalendarModule,
        TooltipModule,
        AppDialogModule
    ],
    exports: [
        TaskTemplateComponent,
        AllTasksComponent,
        TodayTasksComponent,
        HistoryTasksComponent,
        UpcomingTasksComponent,
        AddNewTaskComponent
    ]
})

export class TasksModule {}
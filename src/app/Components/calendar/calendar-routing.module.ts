import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "src/app/Shared/guards/auth.guard";
import { CalendarComponent } from "./calendar-component/calendar.component";

const routes : Routes = [
    {
        path: '',
        component: CalendarComponent,
        canActivate: [authGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppCalendarRoutingModule {}

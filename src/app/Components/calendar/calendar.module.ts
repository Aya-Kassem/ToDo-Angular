import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppCalendarRoutingModule } from "./calendar-routing.module";
import { CalendarComponent } from "./calendar-component/calendar.component";
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
    imports: [
        CommonModule,
        AppCalendarRoutingModule,
        FullCalendarModule
    ],
    declarations: [CalendarComponent]
})


export class AppCalendarModule {}
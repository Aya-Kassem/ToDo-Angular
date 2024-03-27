import { NgModule } from "@angular/core";
import { StickyWallComponent } from "./sticky-wall-component/sticky-wall.component";
import { CommonModule } from "@angular/common";
import { StickyWallRoutingModule } from "./sticky-wall.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppConfirmDialogModule } from "src/app/Shared/confirm-dialog/confirm-dialog.module";
import { AppToastModule } from "src/app/Shared/toast/toast.module";
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
    imports: [
        CommonModule,
        StickyWallRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppConfirmDialogModule,
        AppToastModule,
        TooltipModule
    ],
    declarations: [StickyWallComponent],
    exports: [
        StickyWallComponent
    ]
})

export class StickyWallModule { }
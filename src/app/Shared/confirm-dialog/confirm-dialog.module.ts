import { NgModule } from "@angular/core";
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { CommonModule } from "@angular/common";
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
    declarations: [ConfirmDialogComponent],
    providers: [ConfirmationService, MessageService],
    imports: [ CommonModule, ConfirmDialogModule ],
    exports: [ConfirmDialogComponent]
})

export class AppConfirmDialogModule{}
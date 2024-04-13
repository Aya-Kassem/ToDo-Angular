import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from "./dialog.component";

@NgModule({
    imports: [
        CommonModule,
        DialogModule
    ],
    declarations: [DialogComponent],
    exports: [DialogComponent]
})

export class AppDialogModule {}
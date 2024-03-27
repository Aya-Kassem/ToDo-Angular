import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToastModule } from "primeng/toast";
import { AppConfirmDialogModule } from "../Shared/confirm-dialog/confirm-dialog.module";
import { AuthComponent } from "./auth-template/auth.component";
import { AuthRouthingModule } from "./auth-routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppToastModule } from "../Shared/toast/toast.module";
import { AppSpinnerModule } from "../Shared/spinner/spinner.module";

@NgModule({
    imports: [
        CommonModule, 
        AuthRouthingModule, 
        ToastModule, 
        AppConfirmDialogModule,
        FormsModule,
        ReactiveFormsModule,
        AppToastModule,
        AppConfirmDialogModule,
        AppSpinnerModule
    ],
    declarations: [AuthComponent],
    exports: [AuthComponent]
})

export class AuthModule {}
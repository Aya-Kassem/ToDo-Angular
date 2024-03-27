import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSettingRoutingModule } from './app-setting-routing';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppConfirmDialogModule } from 'src/app/Shared/confirm-dialog/confirm-dialog.module';
import { AppToastModule } from 'src/app/Shared/toast/toast.module';


@NgModule({
    imports: [
        CommonModule,
        AppSettingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        AppConfirmDialogModule,
        AppToastModule
    ],
    declarations: [AppSettingComponent ],
    providers: [MessageService]
})

export class AppSettingModule{}
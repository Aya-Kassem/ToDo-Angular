import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToastComponent } from "./toast.component";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [ToastComponent],
    imports: [CommonModule, ToastModule],
    providers: [MessageService],
    exports: [ToastComponent]
})

export class AppToastModule {}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
    constructor(private _ConfirmationService: ConfirmationService) { }
    @Input() msg!: string;
    @Output() response: EventEmitter<boolean> = new EventEmitter()
    @Input() fire: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    subscription!: Subscription;

    ngAfterContentInit() {
        this.subscription = this.fire.subscribe((val) => {
            if (val) this.confirm()
        })
    }

    confirm() {
        this._ConfirmationService.confirm({
            message: this.msg,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => this.acceptFunc(),
            reject: () => this.rejectFunc()
        });

    }
    acceptFunc() {
        this.response.emit(true)
    }
    rejectFunc() {
        this.response.emit(false)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

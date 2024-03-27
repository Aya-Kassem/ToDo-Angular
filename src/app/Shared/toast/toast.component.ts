import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html'
})
export class ToastComponent {
    subscription!: Subscription;
    constructor(private _messageService: MessageService) { }
    @Input() msg!: string;
    @Input() fire!: BehaviorSubject<boolean>;
    @Input() type!: string;
    @Output() response: EventEmitter<boolean> = new EventEmitter()


    ngAfterContentInit() {
        this.subscription = this.fire.subscribe((val) => {
            if (val) {
                setTimeout(() => {
                    this.show()
                }, 100)
            }
        })
    }

    show() {
        this._messageService.add(
            {
                severity: 'success',
                summary: this.msg,
                life: 2000,
            }
        );
    }

    toastEnded() {
        this.response.emit(true);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

}

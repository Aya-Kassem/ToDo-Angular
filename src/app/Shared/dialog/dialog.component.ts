import { Component, Input } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})


export class DialogComponent {
  visible: boolean = true;
  @Input() isActive!: BehaviorSubject<boolean>;
  @Input() message!: string;
  subscription!: Subscription;

  ngAfterViewInit(){
    this.subscription = this.isActive.subscribe((result) => {
      if(result) this.showDialog()
    })
  }

  showDialog() {
    this.visible = true;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}

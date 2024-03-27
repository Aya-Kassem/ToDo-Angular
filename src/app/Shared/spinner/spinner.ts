import { Component } from "@angular/core";

@Component({
    selector:"app-spinner",
    template:`<div class="lds-hourglass"></div>`,
    styleUrls: ['./spinner.scss']
})

export class BookLoader {}
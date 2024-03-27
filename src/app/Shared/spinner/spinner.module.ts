import { NgModule } from "@angular/core";
import { BookLoader } from "./spinner";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [BookLoader],
    imports: [CommonModule],
    exports: [BookLoader]
})
export class AppSpinnerModule {}
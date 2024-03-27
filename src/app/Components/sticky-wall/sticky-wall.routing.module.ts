import { NgModule } from "@angular/core";
import { StickyWallComponent } from "./sticky-wall-component/sticky-wall.component";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "src/app/Shared/guards/auth.guard";

const routes: Routes = [{
    path: '',
    component: StickyWallComponent,
    canActivate: [authGuard]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class StickyWallRoutingModule {}
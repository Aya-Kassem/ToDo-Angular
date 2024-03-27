import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppSettingComponent } from "./app-setting/app-setting.component";
import { authGuard } from "src/app/Shared/guards/auth.guard";

const routes: Routes = [{
    path: '',
    component: AppSettingComponent,
    canActivate: [authGuard]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppSettingRoutingModule {}
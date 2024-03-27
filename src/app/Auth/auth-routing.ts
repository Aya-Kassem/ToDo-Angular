import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth-template/auth.component";
import { homeGuard } from "../Shared/guards/home.guard";


const routes: Routes = [{
    path: '',
    component: AuthComponent,
    canActivate: [homeGuard]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRouthingModule{}
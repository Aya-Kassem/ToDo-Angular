import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Shared/guards/auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CalendarComponent } from './Components/calendar/calendar-component/calendar.component';

const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { 
        path: 'tasks', 
        loadChildren: () => import('./Components/Tasks/tasks.module').
        then(m => m.TasksModule),
        canActivate: [authGuard]
    },
    { 
        path: 'auth', loadChildren: () => import('./Auth/auth.module').
        then(m => m.AuthModule) 
    },
    { 
        path: 'calendar', loadChildren: () => import('./Components/calendar/calendar.module').
        then(m => m.AppCalendarModule) 
    },
    { 
        path: 'sticky-wall', 
        loadChildren: () => import('./Components/sticky-wall/sticky-wall.module').
        then(m => m.StickyWallModule) 
    },

    {
        path: 'setting',
        loadChildren: () => import('./Components/app-setting/app-setting.module').
        then(m => m.AppSettingModule)
    },
    { path: '**', component: NotFoundComponent, canActivate: [authGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

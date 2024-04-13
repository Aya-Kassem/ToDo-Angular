import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { SharedService } from './Services/shared.service';
import { UserSettingService } from './Services/user-setting.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TasksService } from './Services/tasks.service';
import { filter, map } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'ToDo';
    allUpcomingTasks!: number;
    userAuthCheck: boolean = false;
    isLoading: boolean = true;
    notFoundPage!: boolean;

    constructor(
        private _SharedService: SharedService,
        private _AuthService: AuthService,
        private _UserSettingService: UserSettingService,
        private _Router: Router,
        private _ActivatedRoute: ActivatedRoute,
        private _TasksService: TasksService) { }

    ngOnInit(): void {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        this._AuthService.autoLoggin();
        this._AuthService.user.subscribe((userExist) => {            
            this.userAuthCheck = userExist && userExist.localId ? true : false
            if (this.userAuthCheck) this.isDatabaseExist(userExist.email); 
        })

        this.showNavbar()
        this.setSecondaryColors()
    }

    isDatabaseExist(email: string) {
        this._TasksService.userDatabaseCheck().subscribe((database: { [key: string]: any }) => {
            let oldToken;
            for(let el in database){
                if(database[el].user.email === email){
                    oldToken = database[el].user.id;
                    this._TasksService.email = email;
                    this._TasksService.userToken = oldToken;
                }   
            }
            if (!database || (database && !database[oldToken])) {
                this._TasksService.createUserDatabase()
            }
            
            this._SharedService.getAllData();
            this._UserSettingService.getUserSettings();
        })
    }

    setSecondaryColors() {
        this._UserSettingService.color.subscribe((res) => {
            let mainColor = res;
            document.documentElement.style.setProperty('--IconsColor', res);
            const second_color = mainColor.slice(0, mainColor.length - 2) + '.9)';
            const shadowColor = mainColor.slice(0, mainColor.length - 2) + '.2)';
      
            document.documentElement.style.setProperty('--navIconBgColor', second_color);
            document.documentElement.style.setProperty('--boxShadow', shadowColor);
        })


    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.isLoading = false;
        });
    }

    showNavbar() {
        this._Router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this._ActivatedRoute)
        ).subscribe((route: ActivatedRoute) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            const isNotFound = route.snapshot.component?.name === 'NotFoundComponent' || route.snapshot.component?.name === 'C';
            this.notFoundPage = !isNotFound
        });

    }

}



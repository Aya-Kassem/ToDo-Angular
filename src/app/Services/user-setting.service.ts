import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TasksService } from './tasks.service';


@Injectable({
    providedIn: 'root'
})

export class UserSettingService {
    categories: BehaviorSubject<String[]> = new BehaviorSubject<String[]>([]);
    view: BehaviorSubject<string> = new BehaviorSubject<string>('');
    color: BehaviorSubject<string> = new BehaviorSubject<string>('');
    userToken!: string;
    constructor(private _TasksService: TasksService) { }

    getUserSettings() {
        let user_setting = this.setappDefaultSetting()
        let allsettings =  JSON.parse(localStorage.getItem('settings')!);

        if(allsettings){
            if (user_setting.categories.length) {
                this.categories.next(user_setting.categories);
            }
    
            if (user_setting.view) {
                this.view.next(user_setting.view);
            }
    
            if (user_setting.color) {
                this.color.next(user_setting.color);
            }
        }
    }

    defaultColor() {
        let allSettings = JSON.parse(localStorage.getItem('settings')!);
        let user_setting = allSettings.filter((el: any) => el.user === this.userToken)[0];
        user_setting.color = 'rgba(176,87,141,1)';
        this.color.next('rgba(176,87,141,1)');
        localStorage.setItem('settings', JSON.stringify(allSettings))
        return true
    }

    setUserSettings(key: keyof UserSettingService, val: any) {
        (this[key] as BehaviorSubject<any>).next(val);
        let allSettings = JSON.parse(localStorage.getItem('settings')!);
        let user_setting = allSettings.filter((el: any) => el.user === this.userToken)[0];
        user_setting[key] = val;
        localStorage.setItem('settings', JSON.stringify(allSettings));

        return this.isSettingApplied(val, key)
    }

    isSettingApplied(val: string, key: string): boolean {
        let allSettings = JSON.parse(localStorage.getItem('settings')!);
        let user_setting = allSettings.filter((el: any) => el.user === this.userToken)[0];
        return JSON.stringify(user_setting[key]) === JSON.stringify(val) || user_setting[key].indexOf(val) != -1 ? true : false
    }

    setappDefaultSetting() {
        this.userToken = this._TasksService.userToken;
        let all = JSON.parse(localStorage.getItem('settings')!) || [];
        let user_setting = all.filter((el: any) => el.user === this.userToken)[0];
        let default_settings = { "view": "dayGridMonth", "color": 'rgba(98,114,84,1)', "user": this.userToken, "categories": '[]' };
        if (!user_setting) {
            all.push(default_settings)
        }
        localStorage.setItem('settings', JSON.stringify(all));
        return user_setting;
    }

}

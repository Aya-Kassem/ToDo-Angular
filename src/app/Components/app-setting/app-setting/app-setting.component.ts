import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserSettingService } from 'src/app/Services/user-setting.service';
import { TinyColor } from '@ctrl/tinycolor';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';
import { Task } from '../../Tasks/task';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent {
  constructor(private _UserSettingService: UserSettingService, private _SharedService: SharedService) { }
  userCategories!: String[];
  categoriesExist: boolean = false;
  calendarViews: String[] = ['dayGridMonth', 'dayGrid', 'dayGridWeek', 'listWeek'];
  currentView!: string;
  colorErrMsg!: string;
  success!: string;
  settingApplied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  notification!: string;
  categoryIndex!: number;
  allTasks!: Task[];

  settingForm = new FormGroup({
    category: new FormControl(''),
    calendarView: new FormControl(''),
    color: new FormControl(''),
    removeCategory: new FormControl('')
  })

  ngOnInit() {
    this.getAllTasks();
    this._UserSettingService.categories.subscribe((res) => {
      if (res.length) {
        this.userCategories = res;
        this.categoriesExist = true;
      }
    });

    let settings = JSON.parse(localStorage.getItem('settings')!);
    if (settings && settings.view) {
      this.currentView = settings.view;
    }
  }
  getAllTasks() {
    this._SharedService.allTasks.subscribe((tasks) => {
      if (tasks) {
        this.allTasks = tasks
      }
    })
  }


  setSetting() {
    let result;
    let category = this.settingForm.controls.removeCategory.value;
    let removeCategory = this.confirmCategoryRemove(category!);
    if (!removeCategory) {
      this.noSettingApplied();
      return
    }

    for (let [key, val] of Object.entries(this.settingForm.value)) {
      if (key === 'category' && val) {
        let categories = val.split(',').filter((el) => el != '');
        result = this.setCategories(categories)
      }
      else if (key === 'calendarView' && val) result = this.setView(val)
      else if (key === 'color' && val) result = this.setMainColor(val)
      else if (key === 'removeCategory' && val) result = this.removeCategoy(val)
    }
    if (result) this.applySetting()
  }

  applySetting() {
    this.notification = 'notification';
    this.success = "Changes Applied Successfully!";
    this.settingApplied.next(true);
    this.settingForm.reset()
  }

  noSettingApplied() {
    this.notification = 'error';
    this.success = "Can`t Remove Category With Related Tasks!";
    this.settingApplied.next(true);
  }

  setCategories(categories: String[]) {
    let newCategories = this.userCategories ? [...this.userCategories, ...categories] : [...categories];
    console.log('this.userCategories -> ' + this.userCategories);
    console.log('categories -> ' + categories);
    
    let allCategories = new Set(newCategories);
    console.log('allCategories -> ' + allCategories);
    this.categoriesExist = true;
    return this._UserSettingService.setUserSettings('categories', [...allCategories])
  }

  confirmCategoryRemove(category: string) {
    let filteredTasks = this.allTasks.filter((tasks) => {
      return tasks.taskCategory === category
    })
    return filteredTasks.length > 0 ? false : true
  }

  removeCategoy(category: string) {
    let result;
    this.categoryIndex = this.userCategories.indexOf(category);
    this.userCategories.splice(this.categoryIndex, 1);
    this.categoriesExist = !this.userCategories.length ? false : true;
    result = this._UserSettingService.setUserSettings('categories', this.userCategories)
    return result;
  }

  setView(view: string) {
    this.currentView = view;
    return this._UserSettingService.setUserSettings('view', view);
  }

  setMainColor(color: string) {
    var result;
    if (color.indexOf(',') != -1) {
      this.colorErrMsg = 'Error: Please Enter Color Name or Hex Code!'
      result = false;
    }
    else if (color.indexOf(',') === -1) {
      result = this.colorNameOrHexCode(color)
    }
    return result
  }

  colorNameOrHexCode(color: string) {
    this.colorErrMsg = '';
    let userColor = new TinyColor(color);

    userColor.toRgb();
    const main_color = `rgba(${userColor.r},${userColor.g},${userColor.b},1)`;
    return this._UserSettingService.setUserSettings('color', main_color);
  }

  resetSettings() {
    var defaultColor = this._UserSettingService.defaultColor();
    var view = this.setView('dayGridMonth');

    if (defaultColor && view) {
      this.settingApplied.next(true)
      this.success = "Changes Applied Successfully!";
    }

    this.settingForm.reset();
  }

}

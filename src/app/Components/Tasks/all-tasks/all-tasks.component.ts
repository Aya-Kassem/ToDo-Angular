import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Task } from '../task';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserSettingService } from 'src/app/Services/user-setting.service';

@Component({
    selector: 'app-all-tasks',
    templateUrl: './all-tasks.component.html',
    styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent {
    allTasks!: Task[];
    status = ['Open', 'Running'];
    searchForm!: FormGroup;
    tasksLoaded: boolean = false;
    categories!: String[];
    isResetForm: boolean = false;

    constructor(
        private _SharedService: SharedService,
        private _FormBuilder: FormBuilder,
        private datePipe: DatePipe,
        private _UserSettingService: UserSettingService) { }

    ngOnInit() {
        this.getAllCategories()
        this.getAllTasks()
        this.createSearchForm()
    }

    createSearchForm() {
        this.searchForm = this._FormBuilder.group({
            title: new FormControl(''),
            status: new FormControl(''),
            date: new FormControl(''),
            category: new FormControl('')
        })
    }

    getAllCategories() {
        this._UserSettingService.categories.subscribe((res) => {
            if (res.length) {
                this.categories = ['Work', 'Personal', ...res]
            } else {
                this.categories = ['Work', 'Personal']
            }
        });
    }

    getAllTasks() {
        this._SharedService.allTasks.subscribe((tasks) => {
            if (tasks) {
                this.allTasks = tasks
                this.tasksLoaded = true;
            }
        })
    }
    
    searchTasks() {
        if (!this.checkFormValidity() && !this.isResetForm) return;
        this.tasksLoaded = false;
        this.searchForm.controls['date'].setValue(this.changeDateFormat());
        this._SharedService.searchTasks(this.searchForm.value)
        this._SharedService.searchResults$.subscribe((res) => {
            this.tasksLoaded = true;
            this.allTasks = res
        })
    }

    checkFormValidity() {
        let atLeastOneControlWithValue = false;
        Object.keys(this.searchForm.controls).forEach(controlName => {
            const control = this.searchForm.controls[controlName];
            if (control.value !== null && control.value !== '') {
                atLeastOneControlWithValue = true;
            }
        });

        return atLeastOneControlWithValue
    }

    changeDateFormat() {
        let start = this.searchForm.controls['date'].value ? this.searchForm.controls['date'].value[0] : null
        let end = this.searchForm.controls['date'].value ? this.searchForm.controls['date'].value[1] : null
        let userDate = {
            start: start ? this.datePipe.transform(start, 'yyyy-MM-dd') : null,
            end: end ? this.datePipe.transform(end, 'yyyy-MM-dd') : null
        };
        return userDate
    }

    reset() {
        this.isResetForm = true;
        this.searchForm.reset();
    }
}



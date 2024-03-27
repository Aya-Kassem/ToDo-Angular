import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { SignUpResponseData, User, currentUser, signInResponseData } from '../authentication';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    @ViewChild('loggingForm') loggingForm!: ElementRef;
    @ViewChild('imgContainer') imgContainer!: ElementRef;

    templateType!: string;
    isLoading: boolean = false;
    errMsg: string = '';
    getScreenWidth: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    showImage: boolean = true;
    signInbg = { 'background-image': "url('assets/images/Tablet login-amico.svg')" };
    signUpbg = { 'background-image': "url('assets/images/Sign up-amico.svg')" };

    img!: HTMLElement;
    requestSend: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    error: string = 'error';
    validationError: string = 'Please Enter Valid Email!';


    constructor(private _AuthService: AuthService, private _Router: Router) { }
    ngOnInit(): void {
        this.templateType = 'signIn';
        this.getScreenWidth.next(window.innerWidth);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.img = this.imgContainer.nativeElement;
            this.differentScreenStyle(this.getScreenWidth.value)
        })
    }
    switchLogMode() {
        this.templateType = this.templateType == 'signIn' ? 'auth/signUp' : 'signIn';
        this.errMsg = '';
        this.userForm.reset();
    }
    userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    registerUser() {
        this.templateType == 'auth/signUp' ? this.signUp() : this.signIn()
    }
    signUp() {
        if (!this.userForm.valid) return;
        let user: User = {
            email: this.userForm.controls.email.value!,
            password: this.userForm.controls.password.value!
        }
        
        this.isLoading = true;
        this._AuthService.signUp(user).subscribe({
            next: (resData) => {
                this.isLoading = false;
                this.saveUserInfo(resData)
            },
            error: (e) => {
                this.errMsg = e
                this.requestSend.next(true)
                this.isLoading = false
            },
            complete: () => {
                this.templateType = 'signIn';
                this._Router.navigate(['/auth'])
            }
        })
    }
    signIn() {
        if (!this.userForm.valid) return;
        let user: User = {
            email: this.userForm.controls.email.value!,
            password: this.userForm.controls.password.value!
        }
        this.isLoading = true;
        this._AuthService.signIn(user.email, user.password).subscribe({
            next: (resData) => {
                this.isLoading = false
                this._Router.navigate(['/tasks'])
            },
            error: (e) => {
                this.isLoading = false;
                this.requestSend.next(true)
                this.errMsg = e
            },
            complete: () => { this._Router.navigate(['/tasks']) }
        })
    }
    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth.next(window.innerWidth);
        this.differentScreenStyle(window.innerWidth)
    }
    saveUserInfo(userData: SignUpResponseData | signInResponseData) {
        let allUsers = JSON.parse(localStorage.getItem('users') || '[]');
        let user = allUsers.filter((el: currentUser) => el.email === userData.email)[0];
        if (!user) {
            let user = { localId: userData.localId, email: userData.email };
            allUsers.push(user);
            localStorage.setItem('users', JSON.stringify(allUsers))
        } else {
            console.log(user.email);

        }
    }
    lgScreenStyle(screenSize: number) {
        this.showImage = true;
        if (screenSize >= 990 && screenSize < 1201) {
            this.img.classList.remove('col-md-6');
            this.img.classList.add('col-md-5');
        } else if (screenSize > 1201) {
            this.img.classList.remove('col-md-6');
            this.img.classList.add('col-md-5');
        }
    }

    differentScreenStyle(width: number) {
        if (width <= 768) {
            this.showImage = false;
        } else if (width > 769 && width < 990) {
            this.showImage = true;
        } else {
            this.lgScreenStyle(width)
        }
    }

}

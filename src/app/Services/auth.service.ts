import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { SignUpResponseData, signInResponseData, User, currentUser } from '../Auth/authentication';
import { Router } from '@angular/router';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiKey: string = 'AIzaSyDPJ_qKPDLlglkdskE0wc_iaPC64XBA5iw';
  user: BehaviorSubject<currentUser> = new BehaviorSubject<currentUser>({ email: '', localId: '', idToken: '', expirationDate: 0, activeUser: false });

  constructor(private _HttpClient: HttpClient, private _Router: Router, private _TasksService:TasksService) { }

  signUp(userData: User) {
    return this._HttpClient.post<SignUpResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      {
        'email': userData.email,
        'password': userData.password,
        'returnSecureToken': true
      })
      .pipe(catchError(this.errorHandling))
  }

  signIn(userEmail: string, userPassword: string) {
    return this._HttpClient.post<signInResponseData>
      (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        {
          'email': userEmail,
          'password': userPassword,
          'returnSecureToken': true
        }
      ).pipe(catchError(this.errorHandling),
        tap(userData => { this.userDataHandling(userData.email, userData.localId, userData.idToken, +userData.expiresIn) })
      )
  }

  private errorHandling(errOccured: HttpErrorResponse) {
    let errMessage = "An Error Occured!";
    if (!errOccured.error || !errOccured.error.error) return throwError(() => new Error(errMessage))
    errMessage = errOccured.error.error.message;
    if( errMessage.includes('TOO_MANY_ATTEMPTS_TRY_LATER') ){
      errMessage = 'Too Many Attempts, Please Try Again Later!'
    }

    return throwError(() => new Error(errMessage));
  }

  private userDataHandling(email: string, userId: string, token: string, expiresIn: number) {
    let savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    let user = savedUsers.filter( (el: currentUser) => el.email == email )[0];
    if (!user) {
      user = {};
      user.localId = userId
      user.email = email
      savedUsers.push(user)
    }

    user.idToken = token;
    user.expirationDate = expiresIn;
    user.activeUser = true;

    localStorage.setItem('users', JSON.stringify(savedUsers));
    this.user.next(user);
    this._TasksService.userToken = user.localId
    this._TasksService.email = user.email
  }

  
  logOut() {
    let allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    let user = allUsers.filter((el: any) => el.activeUser === true)[0];

    delete user.idToken;
    delete user.expirationDate;
    user.activeUser = false;

    localStorage.setItem('users', JSON.stringify(allUsers));
    this.user.next({ email: '', localId: '', idToken: '', expirationDate: 0, activeUser: false });
    this._TasksService.userToken = '';
    this._TasksService.email = '';    
    this._Router.navigate(['/auth']);
  }

  autoLoggin() {
    let allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    let user = allUsers.filter((el: any) => el.activeUser === true)[0];

    if (user && user.localId) {
      this.user.next(user);
      this._TasksService.userToken = user.localId 
      this._TasksService.email = user.email     
    }        
  }

}

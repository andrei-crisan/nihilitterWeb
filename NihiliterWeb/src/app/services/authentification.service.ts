import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CredentialsService } from './credentials.service';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  loggedUser!: User;

  constructor(private credentialsService: CredentialsService, private route: Router) {
    this._isLoggedIn$.next(!!this.token);
    if (this.token) {
      this.loggedUser = this.getLoggedUser(this.token);
    }
  }

  get token(): any {
    return localStorage.getItem('nietszche');
  }

  private getLoggedUser(token: string): User {
    return JSON.parse(atob(token.split('.')[1])) as User;
  }

  login(loginForm: FormGroup) {

    let userForLogin: { email: string, password: string } = {
      email: loginForm.get('email')?.value,
      password: loginForm.get('password')?.value
    };

    console.log(userForLogin);
    this.credentialsService.getLoggedIn(userForLogin)
      .subscribe({
        next: result => {
          localStorage.setItem('nietszche', result.token);
          this.loggedUser = this.getLoggedUser(result.token);
          this._isLoggedIn$.next(true);
          console.log(this.token);
          // this.route.navigate(['']);                                 //TODO: De setat ruta!!
        },
        error: () => {
          alert("Nothing!");
          location.reload();
        }
      });
  }
}

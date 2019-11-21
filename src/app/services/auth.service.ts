import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { LocalStorage, TypeLocalStorage } from './util.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url: string;
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router, private config: ConfigService) {
    this.url = this.config.getConfig().API;
  }

  login(username: string, password: string) {
    return this.http.post<AuthResData>(`${this.url}/login`, { username, password })
      .pipe(
        catchError(errorRes => {
          return throwError(errorRes.message);
        }),
        tap(resData => {
          const user = new User(resData.name, resData.role, resData.token);
          this.user.next(user);
          LocalStorage.setItem<User>(TypeLocalStorage.AUTH, user);
        })
      );
  }

  logout() {
    this.user.next(null);
    LocalStorage.removeItem(TypeLocalStorage.AUTH);
    this.router.navigate(['/login']);
  }
}

interface AuthResData {
  name: string,
  role: string,
  token: string
}

export class User {
  constructor(public name: string, public role: string, private _token: string) { }

  get token() {
    return this._token;
  }
}
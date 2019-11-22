import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { LocalStorage, TypeLocalStorage } from './util.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url: string;

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
          LocalStorage.setItem(TypeLocalStorage.AUTH, user);
        })
      );
  }

  logout() {
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
  constructor(private _name: string, public role: string, private _token: string) { }

  get name() {
    return this._name;
  }

  get token() {
    return this._token;
  }
}
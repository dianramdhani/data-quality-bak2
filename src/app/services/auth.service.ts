import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // its dev. change to false for implementation.
  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 500);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

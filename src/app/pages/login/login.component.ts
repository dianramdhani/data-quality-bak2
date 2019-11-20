import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string;
  spinner = false;

  constructor(private router: Router, private auth: AuthService) { }

  login(form: NgForm) {
    const { username, password } = form.value;
    this.spinner = true;
    this.auth.login(username, password).subscribe(
      resData => {
        this.spinner = false;
        this.router.navigate(['/user/dashboard']);
      },
      errorMessage => {
        this.spinner = false;
        this.error = errorMessage;
      }
    );
  }
}
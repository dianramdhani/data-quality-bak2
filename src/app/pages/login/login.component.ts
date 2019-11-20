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
  constructor(private router: Router, private auth: AuthService) { }

  login(form: NgForm) {
    const { username, password } = form.value;
    this.auth.login(username, password).subscribe(resData => {
      this.router.navigate(['/user/dashboard']);
    });
  }
}
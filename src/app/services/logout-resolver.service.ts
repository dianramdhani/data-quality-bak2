import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class LogoutResolverService implements Resolve<void> {
  constructor(private auth: AuthService) { }

  resolve() {
    this.auth.logout();
  }
}
import { Component, AfterViewInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { replace } from 'feather-icons';

import { Menu, Type } from './menu.model';
import { AuthService, User } from 'src/app/services/auth.service';
import { LocalStorage, TypeLocalStorage } from '../../services/util.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  @Input() menus: Menu[];
  type = Type;
  scriptElements = [
    document.createElement('script'),
    document.createElement('script')
  ];
  user: User;

  constructor(private auth: AuthService) {
    this.user = Object.setPrototypeOf(LocalStorage.getItem(TypeLocalStorage.AUTH), User.prototype);
  }

  ngAfterViewInit() {
    this.scriptElements[0].src = './dashforge.js';
    this.scriptElements[1].src = './dashforge.aside.js';
    this.scriptElements.forEach(scriptElement => {
      document.body.appendChild(scriptElement);
    });
    replace();
  }

  ngOnDestroy() {
    this.scriptElements.forEach(scriptElement => {
      scriptElement.parentElement.removeChild(scriptElement);
    });
  }
}
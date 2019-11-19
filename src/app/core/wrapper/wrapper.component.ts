import { Component, AfterViewInit, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { replace } from 'feather-icons';

import { Menu, Type } from './menu.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit, OnInit {
  @Input() menus: Menu[];
  type = Type;
  constructor(private router: Router) { }

  ngOnInit() {
    const menuDefault = this.menus.find((menu: Menu) => menu.active === true);
    this.router.navigate([menuDefault.state.to]);
  }

  ngAfterViewInit() {
    const scriptElement = document.createElement('script');
    scriptElement.src = './dashforge.aside.js';
    document.body.appendChild(scriptElement);
    replace();
  }
}

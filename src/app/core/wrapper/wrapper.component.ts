import { Component, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { replace } from 'feather-icons';

import { Menu, Type } from './menu.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit {
  @Input() menus: Menu[];
  type = Type;
  constructor(private router: Router) { }

  ngAfterViewInit() {
    const scriptElement = document.createElement('script');
    scriptElement.src = './dashforge.aside.js';
    document.body.appendChild(scriptElement);
    replace();
  }
}

import { Component } from '@angular/core';

import { Menu, Type } from '../../core/wrapper/menu.model';

import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  menus: Menu[] = [
    new Menu({
      type: Type.TITLE,
      label: 'hallo title'
    }),
    new Menu({
      type: Type.LINK,
      label: 'testing',
      icon: 'monitor',
      state: { to: 'testing', params: {} },
      active: true
    }),
    new Menu({
      type: Type.LINK,
      label: 'testing2',
      icon: 'book-open',
      state: { to: 'testing', params: {} }
    }),
    new Menu({
      type: Type.TITLE,
      label: 'hallo title 2'
    }),
    new Menu({
      type: Type.LINK,
      label: 'testing2',
      icon: 'book-open',
      state: { to: 'testing', params: {} }
    }),
    new Menu({
      type: Type.HASSUBMENUS,
      label: 'has sub menu',
      icon: 'book-open',
      subMenus: [
        {
          label: 'sub 1',
          state: { to: 'testing', params: {} }
        },
        {
          label: 'sub 2',
          state: { to: 'testing', params: {} }
        },
        {
          label: 'sub 3',
          state: { to: 'testing', params: {} }
        }
      ]
    })
  ];
  constructor(private config: ConfigService) {
    console.log(this.config.getConfig());
  }
}

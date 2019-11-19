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
    {
      type: Type.LINK,
      label: 'Dashboard',
      icon: 'monitor',
      state: { to: '/user/dashboard', params: {} }
    },
    {
      type: Type.LINK,
      label: 'Normalize Rule',
      icon: 'monitor',
      state: { to: '/user/normalize-rule', params: {} }
    },
    {
      type: Type.LINK,
      label: 'Source Data Upload',
      icon: 'monitor',
      state: { to: '/user/source-data-upload', params: {} }
    }
  ];
  constructor(private config: ConfigService) {
    console.log(this.config.getConfig());
  }
}

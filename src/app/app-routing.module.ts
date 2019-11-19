import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';
import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'normalize-rule', component: NormalizeRuleComponent },
      { path: 'source-data-upload', component: SourceDataUploadComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

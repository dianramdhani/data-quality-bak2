import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';
import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { LogoutResolverService } from './services/logout-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, resolve: { _: LogoutResolverService } },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'normalize-rule', component: NormalizeRuleComponent },
      { path: 'source-data-upload', component: SourceDataUploadComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
    ]
  },
  { path: '**', redirectTo: '/user/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { LogoutResolverService } from './services/logout-resolver.service';

// Components
import { LoginComponent } from './pages/login/login.component';

import { UserComponent } from './pages/user/user.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';

import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';
import { ListFileComponent } from './pages/source-data-upload/list-file/list-file.component';
import { ListDataComponent } from './pages/source-data-upload/list-data/list-data.component';
import { FindMatchComponent } from './pages/source-data-upload/find-match/find-match.component';
import { MergeFormComponent } from './pages/source-data-upload/merge-form/merge-form.component';

import { ObjectMakerComponent } from './pages/object-maker/object-maker.component';

import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, resolve: { _: LogoutResolverService } },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'normalize-rule', component: NormalizeRuleComponent },
      {
        path: 'source-data-upload', component: SourceDataUploadComponent, children: [
          { path: '', component: ListFileComponent },
          { path: 'list-data', component: ListDataComponent },
          { path: 'list-data/find-match', component: FindMatchComponent },
          { path: 'list-data/find-match/merge-form', component: MergeFormComponent }
        ]
      },
      { path: 'object-maker', component: ObjectMakerComponent },
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

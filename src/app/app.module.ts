import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Services
import { ConfigService, ConfigLoader } from './services/config.service';


// Core
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { SpinnerComponent } from './core/spinner/spinner.component';


// Pages
import { LoginComponent } from './pages/login/login.component';

import { UserComponent } from './pages/user/user.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';
import { RuleFormComponent } from './pages/normalize-rule/rule-form/rule-form.component';

import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';
import { ListDataComponent } from './pages/source-data-upload/list-data/list-data.component';
import { FindMatchComponent } from './pages/source-data-upload/find-match/find-match.component';
import { MergeFormComponent } from './pages/source-data-upload/merge-form/merge-form.component';
import { ListFileComponent } from './pages/source-data-upload/list-file/list-file.component';

import { ObjectMakerComponent } from './pages/object-maker/object-maker.component';
import { ObjectFormComponent } from './pages/object-maker/object-form/object-form.component';

import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    SpinnerComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    NormalizeRuleComponent,
    SourceDataUploadComponent,
    AccountSettingsComponent,
    RuleFormComponent,
    ListDataComponent,
    FindMatchComponent,
    MergeFormComponent,
    ListFileComponent,
    ObjectMakerComponent,
    ObjectFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RuleFormComponent,
    ObjectFormComponent
  ]
})
export class AppModule { }

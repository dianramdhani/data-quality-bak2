import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService, ConfigLoader } from './services/config.service';

import { AppComponent } from './app.component';
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NormalizeRuleComponent } from './pages/normalize-rule/normalize-rule.component';
import { SourceDataUploadComponent } from './pages/source-data-upload/source-data-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    NormalizeRuleComponent,
    SourceDataUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

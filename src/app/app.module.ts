import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

// Services
import { ConfigService, ConfigLoader } from './services/config.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

// Core
import { WrapperComponent } from './core/wrapper/wrapper.component';

// Pages
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
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

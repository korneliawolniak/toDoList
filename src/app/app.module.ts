import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './services/app.routes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

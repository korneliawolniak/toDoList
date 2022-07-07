import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { routes } from './app.routes';
import { ToDoService } from './services/to-do/to-do.service';
import { LoginApiService } from './services/login-api/login-api.service';
import { LoginService } from './services/login/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './services/guard/guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    ErrorPageComponent,
    ListComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    DragDropModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ToDoService, LoginService, LoginApiService, LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

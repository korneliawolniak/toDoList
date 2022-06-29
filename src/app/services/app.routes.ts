import { Routes } from '@angular/router';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error',
  },
];

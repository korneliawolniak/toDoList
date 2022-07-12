import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly routes: Router
  ) {}

  public canActivate(): boolean | UrlTree {
    if (this.loginService.loginValue !== '') {
      return true;
    } else {
      return this.routes.parseUrl('/login');
    }
  }
}

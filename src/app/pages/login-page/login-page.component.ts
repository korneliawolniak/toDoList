import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public errorMessage = false;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  public login(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement
  ): void {
    let login = loginInput.value;
    let password = passwordInput.value;

    this.loginService.login(login, password).subscribe({
      next: () => {
        this.router.navigate(['./dashboard']);
      },
      error: () => {
        this.errorMessage = true;
        loginInput.value = '';
        passwordInput.value = '';
      },
    });
  }
}

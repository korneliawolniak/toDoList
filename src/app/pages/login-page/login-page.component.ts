import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public errorMessage: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  public redirectToRegisterPage() {
    this.router.navigate(['./register']);
  }

  public login(loginInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    const login = loginInput.value;
    const password = passwordInput.value;

    this.loginService.login(login, password).subscribe({
      next: (data: any) => {
        this.router.navigate(['./dashboard']);
      },
      error: (error) => {
        this.errorMessage = true;
        loginInput.value = '';
        passwordInput.value = '';
      },
    });
  }
}

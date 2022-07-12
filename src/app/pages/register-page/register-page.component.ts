import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public differentPasswordMessage = false;
  public wrongTypePasswordMessage = false;
  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  public register(
    loginInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    repeatedPasswordInput: HTMLInputElement
  ): void {
    const login = loginInput.value;
    const password = passwordInput.value;
    const repeatedPassword = repeatedPasswordInput.value;

    if (password == ' ' || login == ' ' || password == '' || login == '') {
      this.wrongTypePasswordMessage = true;
    } else if (password !== repeatedPassword) {
      this.differentPasswordMessage = true;
    } else {
      this.differentPasswordMessage = false;
      this.loginService.register(login, password).subscribe({
        next: () => {
          this.router.navigate(['./login']);
        },
        error: () => {
          this.router.navigate(['./error']);
        },
      });
    }
  }
}

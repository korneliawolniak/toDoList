import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent{

  constructor(private router: Router) { }

  public redirectToLoginPage() {
    this.router.navigate(['./login']);
  }
  public redirectToDashboardPage() {
    this.router.navigate(['./dashboard']);
  }

  

}

import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from 'src/app/models/login.interface';
import { LoginApiService } from '../login-api/login-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginValue = '';

  constructor(private readonly loginApiService: LoginApiService) {}

  public login(login: string, password: string): Observable<Login> {
    return this.loginApiService.login(login, password).pipe(
      tap((data: Login) => {
        this.loginValue = data.login;
      })
    );
  }
  public register(login: string, password: string): Observable<Login> {
    return this.loginApiService.register(login, password);
  }
}

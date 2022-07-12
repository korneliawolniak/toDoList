import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginApiService } from '../login-api/login-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginValue = '';
  constructor(private readonly loginApiService: LoginApiService) {}

  public login(login: string, password: string): Observable<Object> {
    return this.loginApiService.login(login, password).pipe(
      tap((data: any) => {
        this.loginValue = data.login;
      })
    );
  }
  public register(login: string, password: string): Observable<Object> {
    return this.loginApiService.register(login, password);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.interface';
import { LoginGuard } from '../guard/guard';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private readonly backendUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  public login(login: string, password: string): Observable<Login> {
    return this.http.post<Login>(this.backendUrl + '/login', {
      login,
      password,
    });
  }
  public register(login: string, password: string): Observable<Login> {
    return this.http.post<Login>(this.backendUrl + '/register', {
      login,
      password,
    });
  }
}

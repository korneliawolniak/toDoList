import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private readonly backendUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  public login(login: string, password: string) {
    return this.http.post(this.backendUrl + '/login', {
      login,
      password,
    });
  }
  public register(login: string, password: string) {
    return this.http.post(this.backendUrl + '/register', {
      login,
      password,
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoApiService {
  private readonly backendUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public getTasks(login: string): any {
    return this.http.get(this.backendUrl + '/tasks/' + login);
  }
  public createTask(login: string, task: any): any {
    return this.http.post(this.backendUrl + '/tasks', { login, task });
  }
  public moveTask(login: string, task: any): any {
    return this.http.put(this.backendUrl + '/task-move', { login, task });
  }
  public deleteTask(login: string, task: any): any {
    return this.http.put(this.backendUrl + '/task-delete', { login, task });
  }
}

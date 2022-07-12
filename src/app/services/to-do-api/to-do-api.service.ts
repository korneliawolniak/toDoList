import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ToDoApiService {
  private readonly backendUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public getTasks(login: string): Observable<Object> {
    return this.http.get(this.backendUrl + '/tasks/' + login);
  }
  public createTask(login: string, task: string): Observable<Object> {
    return this.http.post(this.backendUrl + '/tasks', { login, task });
  }
  public moveTask(login: string, task: Object): Observable<Object> {
    return this.http.put(this.backendUrl + '/task-move', { login, task });
  }
  public deleteTask(login: string, task: Task): Observable<Object> {
    return this.http.put(this.backendUrl + '/task-delete', { login, task });
  }
}

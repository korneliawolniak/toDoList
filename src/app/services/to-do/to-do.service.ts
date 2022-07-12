import { Injectable } from '@angular/core';
import { Task } from '../../models/task.interface';
import { ToDoApiService } from '../to-do-api/to-do-api.service';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(
    private readonly api: ToDoApiService,
    private readonly loginservice: LoginService
  ) {}

  public getTasks(): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.getTasks(login);
  }

  public createTask(task: string): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.createTask(login, task);
  }

  public moveTask(task: Object): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.moveTask(login, task);
  }

  public deleteTask(task: Task): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.deleteTask(login, task);
  }
}

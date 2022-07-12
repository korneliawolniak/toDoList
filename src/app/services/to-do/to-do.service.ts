import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DroppedTask, Task, TasksTables } from '../../models/task.interface';
import { LoginService } from '../login/login.service';
import { ToDoApiService } from '../to-do-api/to-do-api.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(
    private readonly api: ToDoApiService,
    private readonly loginservice: LoginService
  ) {}

  public getTasks(): Observable<TasksTables> {
    const login = this.loginservice.loginValue;
    return this.api.getTasks(login);
  }

  public createTask(task: string): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.createTask(login, task);
  }

  public moveTask(task: DroppedTask): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.moveTask(login, task);
  }

  public deleteTask(task: Task): Observable<Object> {
    const login = this.loginservice.loginValue;
    return this.api.deleteTask(login, task);
  }
}

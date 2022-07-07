import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../../models/task.interface';
import * as uuid from 'uuid';
import { ToDoApiService } from '../to-do-api/to-do-api.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(
    private readonly api: ToDoApiService,
    private readonly loginservice: LoginService
  ) {}

  public getTasks(): any {
    const login = this.loginservice.loginValue;
    return this.api.getTasks(login);
  }

  public createTask(task: string): any {
    const taskObj: Task = {
      id: uuid.v4(),
      description: task[0].toUpperCase() + task.substring(1) + '!',
      status: TaskStatus.ToDo,
    };
    const login = this.loginservice.loginValue;
    return this.api.createTask(login, taskObj);
  }
  public moveTask(task: any): any {
    const login = this.loginservice.loginValue;
    return this.api.moveTask(login, task);
  }
  public deleteTask(task: any): any {
    const login = this.loginservice.loginValue;
    return this.api.deleteTask(login, task);
  }
}

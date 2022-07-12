import { Component } from '@angular/core';
import { Observable, switchMapTo } from 'rxjs';
import { DroppedTask, Task, TasksTables } from 'src/app/models/task.interface';
import { LoginService } from 'src/app/services/login/login.service';
import { ToDoService } from 'src/app/services/to-do/to-do.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public user = this.loginService.loginValue;
  public tasks$: Observable<TasksTables>;

  constructor(
    private readonly toDoService: ToDoService,
    private readonly loginService: LoginService
  ) {
    this.tasks$ = this.toDoService.getTasks();
  }

  public getDroppedTask(task: DroppedTask): void {
    this.tasks$ = this.toDoService
      .moveTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }

  public handleEventTask(task: string): void {
    this.tasks$ = this.toDoService
      .createTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }

  public deleteTask(task: Task): void {
    this.tasks$ = this.toDoService
      .deleteTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }
}

import { Component } from '@angular/core';
import { Observable, switchMapTo } from 'rxjs';
import { Task, TasksTables } from 'src/app/models/task.interface';
import { LoginService } from 'src/app/services/login/login.service';
import { ToDoService } from 'src/app/services/to-do/to-do.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public user = this.loginService.loginValue;
  public tasks$: Observable<Object>;

  constructor(
    private toDoService: ToDoService,
    private loginService: LoginService
  ) {
    this.tasks$ = this.toDoService.getTasks();
  }

  public getDroppedTask(task: Object): void {
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

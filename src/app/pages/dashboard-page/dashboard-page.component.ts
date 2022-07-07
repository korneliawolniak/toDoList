import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMapTo } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ToDoService } from 'src/app/services/to-do/to-do.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public allTasks: any;
  public user = this.loginService.loginValue;
  public tasks$: Observable<any>;

  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.tasks$ = this.toDoService.getTasks();
  }

  public redirectToLoginPage() {
    this.router.navigate(['./login']);
  }

  public getDroppedTask(task: any) {
    this.tasks$ = this.toDoService
      .moveTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }

  public handleEventTask(task: string): void {
    this.tasks$ = this.toDoService
      .createTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }
  public deleteTask(task: any) {
    this.tasks$ = this.toDoService
      .deleteTask(task)
      .pipe(switchMapTo(this.toDoService.getTasks()));
  }
}

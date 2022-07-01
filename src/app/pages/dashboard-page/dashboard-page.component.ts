import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TasksTables } from 'src/app/models/task.interface';
import { ToDoService } from 'src/app/services/to-do.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
 
  public allTasksArray: TasksTables = {
    tasksArray: [],
    inProgressTasksArray: [],
    doneTasksArray: [],
  };

  constructor(private toDoService: ToDoService) {
    this.toDoService.getTaskArrayObs().subscribe((allTasksArray) => {
      this.allTasksArray = allTasksArray;
    });
  }

  public handleEventTask(task: string): void {
    this.toDoService.addTaskToArray(task);
  }

  public handleToDo(task: Task): void {
    this.toDoService.changeStateToInProgressAndRemove(task);
  }

  public handleInProgress(task: Task): void {
    this.toDoService.changeStateToDoneAndRemove(task);
  }

  public handleDelete(task: Task): void {
    this.toDoService.deleteTaskFromArray(task);
  }

}

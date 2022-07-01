import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TasksTables, TaskStatus } from 'src/app/models/task.interface';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public allTasksArray: TasksTables = {
    toDoArray: [],
    inProgressTasksArray: [],
    doneTasksArray: [],
  };

  constructor(private toDoService: ToDoService, private router: Router) {
    this.toDoService.getTaskArrayObs().subscribe((allTasksArray) => {
      this.allTasksArray = allTasksArray;
    });
  }
  public redirectToLoginPage() {
    this.router.navigate(['./login']);
  }

  public handleEventTask(task: string): void {
    if (task) {
      this.toDoService.addTaskToArray(task);
    }
  }

  public drop(event: CdkDragDrop<Task[]>) {
    const droppedElement = event.previousContainer.data[event.previousIndex];

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    switch (event.container.id) {
      case 'todo':
        droppedElement.status = TaskStatus.ToDo;
        break;
      case 'inprogress':
        droppedElement.status = TaskStatus.InProgress;
        break;
      case 'done':
        droppedElement.status = TaskStatus.Done;
        break;
    }
  }
}

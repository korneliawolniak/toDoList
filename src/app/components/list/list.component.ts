import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task, TasksTables, TaskStatus } from 'src/app/models/task.interface';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public allTasksArray: TasksTables = {
    toDoArray: [],
    inProgressTasksArray: [],
    doneTasksArray: [],
  };

  constructor(private toDoService: ToDoService) {
    this.toDoService.getTaskArrayObs().subscribe((allTasksArray) => {
      this.allTasksArray = allTasksArray;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
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

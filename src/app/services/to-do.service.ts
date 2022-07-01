import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task, TasksTables, TaskStatus } from '../models/task.interface';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private tasksArray: Task[] = [];
  private inProgressTasksArray: Task[] = [];
  private doneTasksArray: Task[] = [];
  public description = '';

  private toDoTables$: BehaviorSubject<TasksTables> =
    new BehaviorSubject<TasksTables>({
      toDoArray: [],
      inProgressTasksArray: [],
      doneTasksArray: [],
    });

  public addTaskToArray(task: string): void {
    const taskObj: Task = {
      id: uuid.v4(),
      description: task[0].toUpperCase() + task.substring(1) + '!',
      status: TaskStatus.ToDo,
    };
    this.tasksArray.push(taskObj);
    this.updateSubjectTables();
  }

  public getTaskArrayObs(): Observable<TasksTables> {
    return this.toDoTables$.asObservable();
  }

  private updateSubjectTables(): void {
    const allTasksArray: TasksTables = {
      toDoArray: this.tasksArray,
      inProgressTasksArray: this.inProgressTasksArray,
      doneTasksArray: this.doneTasksArray,
    };
    this.toDoTables$.next(allTasksArray);
  }
}

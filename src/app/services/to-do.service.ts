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

  private toDoTables$: BehaviorSubject<TasksTables> =
    new BehaviorSubject<TasksTables>({
      tasksArray: [],
      inProgressTasksArray: [],
      doneTasksArray: [],
    });

  public addTaskToArray(task: string): void {
    const taskObj: Task = {
      id: uuid.v4(),
      description: task,
      status: TaskStatus.ToDo,
    };
    this.tasksArray.push(taskObj);
    this.updateSubjectTables();
  }

  public getTaskArrayObs(): Observable<TasksTables> {
    return this.toDoTables$.asObservable();
  }

  public changeStateToInProgressAndRemove(task: Task) {
    task.status = TaskStatus.InProgress;
    this.inProgressTasksArray.push(task);
    this.tasksArray = this.tasksArray.filter(
      (element) => element.id !== task.id
    );
    this.updateSubjectTables();
  }

  public changeStateToDoneAndRemove(task: Task): void {
    task.status = TaskStatus.Done;
    this.doneTasksArray.push(task);
    this.inProgressTasksArray = this.inProgressTasksArray.filter(
      (element) => element.id !== task.id
    );
    this.updateSubjectTables();
  }

  public deleteTaskFromArray(task: Task): void {
    switch (task.status) {
      case TaskStatus.ToDo:
        this.tasksArray = this.tasksArray.filter(
          (element) => element.id !== task.id
        );
        break;
      case TaskStatus.InProgress:
        this.inProgressTasksArray = this.inProgressTasksArray.filter(
          (element) => element.id !== task.id
        );
        break;
      case TaskStatus.Done:
        this.doneTasksArray = this.doneTasksArray.filter(
          (element) => element.id !== task.id
        );
        break;
    }
    this.updateSubjectTables();
  }

  private updateSubjectTables(): void {
    const allTasksArray = {
      tasksArray: this.tasksArray,
      inProgressTasksArray: this.inProgressTasksArray,
      doneTasksArray: this.doneTasksArray,
    };
    this.toDoTables$.next(allTasksArray);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public tasksArray: Task[] = [];
  @Input() public isInprogressButtonVisible: boolean = false;
  @Input() public isDoneButtonVisible: boolean = false;
  @Input() public isDeleteButtonVisible: boolean = false;
  @Output() public toDoClick: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() public inProgressClick: EventEmitter<Task> =
    new EventEmitter<Task>();
  @Output() public deleteClick: EventEmitter<Task> = new EventEmitter<Task>();

  public onToDoClick(task: Task): void {
    this.toDoClick.emit(task);
  }

  public onImProgressClick(task: Task): void {
    this.inProgressClick.emit(task);
  }

  public onDeleteClick(task: Task): void {
    this.deleteClick.emit(task);
  }
}

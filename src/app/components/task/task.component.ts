import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() public task!: Task;
  @Input() public isInprogressButtonVisible = false;
  @Input() public isDoneButtonVisible = false;
  @Input() public isDeleteButtonVisible = false;
  @Output() public toDoClick: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() public inProgressClick: EventEmitter<Task> =
    new EventEmitter<Task>();
  @Output() public deleteClick: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}
  public onToDoClick(task: Task): void {
    this.toDoClick.emit(task);
  }
  public onInProgressClick(task: Task): void {
    this.inProgressClick.emit(task);
  }
  public onDeleteClick(task: Task): void {
    this.deleteClick.emit(task);
  }
}

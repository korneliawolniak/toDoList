import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TasksTables } from 'src/app/models/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public allTasks: any | undefined;
  @Output() public dropedTask = new EventEmitter<Object>();
  @Output() public taskToDelete = new EventEmitter<Task>();

  public drop(event: CdkDragDrop<Task[]>): void {
    const previousList = event.previousContainer.id;
    const currentList = event.container.id;
    const dropedTask = event.previousContainer.data[event.previousIndex];
    const droppedTaskWithData = { previousList, currentList, dropedTask };
    this.dropedTask.emit(droppedTaskWithData);
  }
  public onDelete(task: Task): void {
    this.taskToDelete.emit(task);
  }
}

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DroppedTask, Task, TasksTables } from 'src/app/models/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public allTasks!: TasksTables;
  @Output() public droppedTask = new EventEmitter<DroppedTask>();
  @Output() public taskToDelete = new EventEmitter<Task>();

  public drop(event: CdkDragDrop<Task[]>): void {
    const previousList = event.previousContainer.id;
    const currentList = event.container.id;
    const droppedTask = event.previousContainer.data[event.previousIndex];
    const droppedTaskWithData = { previousList, currentList, droppedTask };
    this.droppedTask.emit(droppedTaskWithData);
  }
  public onDelete(task: Task): void {
    this.taskToDelete.emit(task);
  }
}

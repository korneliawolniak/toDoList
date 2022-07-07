import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Task } from 'src/app/models/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() public allTasks: any;
  @Output() public dropedTask = new EventEmitter<any>();
  @Output() public taskToDelete = new EventEmitter<any>();

  public drop(event: CdkDragDrop<Task[]>) {
    const previousList = event.previousContainer.id;
    const currentList = event.container.id;
    const dropedTask = event.previousContainer.data[event.previousIndex];
    const obj = { previousList, currentList, dropedTask };
    this.dropedTask.emit(obj);
  }
  public emitTask(task: any) {
    this.taskToDelete.emit(task);
  }
}

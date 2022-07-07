import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() public eventTask: EventEmitter<string> = new EventEmitter<string>();
  task = '';

  public emitTask(task: HTMLInputElement): void {
    this.eventTask.emit(task.value);
    task.value = '';
  }
}

export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
}

export interface TasksTables {
  toDoArray: Task[];
  inProgressTasksArray: Task[];
  doneTasksArray: Task[];
}

export enum TaskStatus {
  ToDo = 'To do',
  InProgress = 'In progress',
  Done = 'Done',
}

export interface Task {
    id: string;
    description: string;
    status: TaskStatus;
  }
  export interface TasksTables {
    tasksArray: Task[];
    inProgressTasksArray: Task[];
    doneTasksArray: Task[];
  }
  
  export enum TaskStatus {
    ToDo = 'To do',
    InProgress = 'In progress',
    Done = 'Done',
  }
  
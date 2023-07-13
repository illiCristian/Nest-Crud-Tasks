export enum TaskStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  DONE = 'DONE',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

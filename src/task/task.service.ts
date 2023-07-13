import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
  ];
  getAlltasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const newTask = {
      id: new Date().toISOString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(newTask);
    return newTask;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updatedFields: any) {
    const task = this.getTaskById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        newTask;
      } else {
        return task;
      }
    });
    return newTask;
  }
}

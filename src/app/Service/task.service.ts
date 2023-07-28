import { Injectable } from '@angular/core';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = [
    {
      id: 5,
      title: 'task 1',
      description: 'complete this assignment asap ',
      dueDate: new Date(),
      priority: 'high',
      status: 'to-do',
    },
    {
      id: 6,
      title: 'task 2',
      description: 'this is task 2 ',
      dueDate: new Date(),
      priority: 'low',
      status: 'to-do',
    },
    {
      id: 7,
      title: 'task 3',
      description: 'this is task 3 ',
      dueDate: new Date(),
      priority: 'medium',
      status: 'to-do',
    },
    {
      id: 1,
      title: 'task 8',
      description: 'this is task 8 ',
      dueDate: new Date(),
      priority: 'low',
      status: 'to-do',
    },
  ];

  getTasks(): TaskInterface[] {
    return this.tasks;
  }

  addTask(task: TaskInterface): void {
    this.tasks.push(task);
  }
}

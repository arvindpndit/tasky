import { Injectable } from '@angular/core';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasks(): TaskInterface[] {
    return this.tasks;
  }

  addTask(task: TaskInterface): void {
    console.log('this.tasks type:', typeof this.tasks);
    console.log('this.tasks value:', this.tasks);

    if (!Array.isArray(this.tasks)) {
      this.tasks = [];
    }

    this.tasks.push(task);
    this.saveTasks();
  }

  private saveTasks(): void {
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  private loadTasks(): void {
    const tasksJSON = localStorage.getItem('tasks');

    if (tasksJSON) {
      try {
        const parsedTasks = JSON.parse(tasksJSON);
        if (Array.isArray(parsedTasks)) {
          this.tasks = parsedTasks;
        } else {
          console.error('Stored tasks in localStorage is not an array.');
          this.tasks = [];
        }
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        this.tasks = [];
      }
    } else {
      this.tasks = [];
      this.saveTasks();
    }
  }
}

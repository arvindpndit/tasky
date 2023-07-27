import { Component } from '@angular/core';
import { TaskInterface } from 'src/app/Interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  task: TaskInterface[] = [
    {
      id: 5,
      title: 'task 1',
      description: 'this is task 1 ',
      dueDate: new Date(),
      priority: 'hign',
    },
    {
      id: 6,
      title: 'task 2',
      description: 'this is task 2 ',
      dueDate: new Date(),
      priority: 'low',
    },
    {
      id: 7,
      title: 'task 3',
      description: 'this is task 3 ',
      dueDate: new Date(),
      priority: 'medium',
    },
    {
      id: 1,
      title: 'task 8',
      description: 'this is task 8 ',
      dueDate: new Date(),
      priority: 'low',
    },
  ];
}

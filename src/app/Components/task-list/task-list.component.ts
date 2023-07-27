import { Component } from '@angular/core';
import { TaskService } from 'src/app/Service/task.service';
import { TaskInterface } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: TaskInterface[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
}

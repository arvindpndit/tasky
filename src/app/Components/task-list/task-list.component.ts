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
  showPopup = false;
  selectedStatus = '';
  taskIdToUpdate: number | undefined;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  showStatusPopup(task: TaskInterface, id: number) {
    this.selectedStatus = task.status;
    this.taskIdToUpdate = id;
    this.showPopup = true;
  }

  updateStatus() {
    const taskToUpdate = this.tasks.find(
      (task: TaskInterface) => task.id === this.taskIdToUpdate
    );

    if (taskToUpdate) {
      taskToUpdate.status = this.selectedStatus;
    }

    this.showPopup = false;
  }

  closePopup() {
    this.showPopup = false;
  }

  onDelete(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.taskService.saveTasks();
      console.log('Task deleted successfully.');
    } else {
      console.log('Task not found.');
    }
  }

  sortTasksByDueDate() {
    this.tasks.sort((a: TaskInterface, b: TaskInterface) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA.getTime() - dateB.getTime();
    });
  }

  sortTasksByPriority() {
    const priorityMap: { [key: string]: number } = {
      low: 3,
      medium: 2,
      high: 1,
    };

    this.tasks.sort((a: TaskInterface, b: TaskInterface) => {
      const priorityA = priorityMap[a.priority.toLowerCase()];
      const priorityB = priorityMap[b.priority.toLowerCase()];

      return priorityA - priorityB;
    });
  }

  sortTasksByStatus() {
    this.tasks.sort((a: TaskInterface, b: TaskInterface) => {
      if (a.status < b.status) return -1;
      if (a.status > b.status) return 1;
      return 0;
    });
  }
}

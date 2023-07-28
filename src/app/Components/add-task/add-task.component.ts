import { Component } from '@angular/core';
import { TaskService } from 'src/app/Service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private taskService: TaskService) {}
  newTask = {
    id: this.generateNewId(),
    title: '',
    description: '',
    dueDate: new Date(),
    priority: '',
    status: '',
  };

  addTask(title: string, description: string, dueDate: Date, priority: string) {
    console.log(title, description, dueDate, priority);
    title &&
      description &&
      dueDate &&
      priority &&
      this.taskService.addTask(this.newTask);
  }

  private generateNewId(): number {
    return Math.floor(Math.random() * 10000);
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TaskComponent } from './Components/task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tasky';
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskDetailComponent } from './Components/task-detail/task-detail.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent,
    TaskDetailComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private message: String = '';

  constructor(private tasksService: TasksService) {

  }

  save() {
    this.tasksService.saveTasksInDb();
    this.message = 'Zapisano!';
  }

  clear() {
    this.tasksService.clearTasksInDb();
    this.message = '';
  }

}

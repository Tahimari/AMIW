import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasksList: Array<Task> = [];

  constructor(private tasksSerivce: TasksService) {
    tasksSerivce.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {
  }

}

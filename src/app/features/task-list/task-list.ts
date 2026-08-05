import { Component, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  taskService=inject(TaskService);
}

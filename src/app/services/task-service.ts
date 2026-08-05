import { Injectable, Service, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
  }
)
export class TaskService {
  private tasksSignal = signal<Task[]>([
    { id: 1, title: 'operi prozore', completed: true, priority: 'low' },
    { id: 2, title: 'operi vrata', completed: true, priority: 'medium' },
    { id: 3, title: 'operi pantole', completed: false, priority: 'medium' },
    { id: 4, title: 'operi sat', completed: false, priority: 'high' },
  ]);

  tasks = this.tasksSignal.asReadonly();

  toggleCompleted(taskId: number): void{
    this.tasksSignal.update(tasks=>
    tasks.map(task=>
    task.id ===taskId ? {...task,completed:!task.completed} : task)
    )
  }
}


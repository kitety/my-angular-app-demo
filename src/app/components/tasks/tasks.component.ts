import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService) {}

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.fetchList();
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe(() => {
      this.fetchList();
    });
  }

  onAddTask(task: Task): void {
    this.tasksService.addTask(task).subscribe(() => {
      this.fetchList();
    });
  }
}

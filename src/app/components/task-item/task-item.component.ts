import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}
  onDelete() {
    this.onDeleteTask.emit(this.task);
  }
  onToggle() {
    this.onToggleReminder.emit(this.task);
  }
}

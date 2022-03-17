import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onSubmit(): void {
    if (!this.text) {
      alert('Please enter a text');
      return;
    }
    if (!this.day) {
      alert('Please enter a day');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    console.log(newTask);
    this.addTask.emit(newTask);

    // reset
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

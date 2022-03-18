import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css'],
})
export class RxjsLearnComponent implements OnInit {
  agents: Observable<string>;
  agentName: string;

  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable<string>(function (subscriber) {
      try {
        subscriber.next('Agent 1');
        setTimeout(() => {
          subscriber.next('Agent 2');
        }, 2000);
        setTimeout(() => {
          subscriber.next('Agent 3');
        }, 4000);
      } catch (error) {
        subscriber.error(error);
      }
    });
    this.agents.subscribe((data) => {
      console.log('subscribe', data);
      this.agentName = data;
    });
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css'],
})
export class RxjsLearnComponent implements OnInit {
  agents: Observable<string>;
  agentName: string;

  studentList = ['Student 1', 'Student 2', 'Student 3'];
  students: Observable<string[]> = of(this.studentList);

  // from 传入array like或者array，返回的是一个Observable，但是订阅的是里面的每一个值
  orders$: Observable<string> = from(['order1', 'order2', 'order3']);

  @ViewChild('validate')
  validate: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // Observable
    /* this.agents = new Observable<string>(function (subscriber) {
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
    }); */
    // of operator
    // 创建一个 Observable 对象，并且把数据放入它里面
    /* console.log(' this.students: ', this.students);
    this.students.subscribe((data) => {
      console.log('subscribe', data);
    }); */
    // from operator
    // Array Like
    // this.orders$.subscribe((data) => {
    //   console.log('subscribe', data);
    // });
    // from event
  }

  rsjxEventObservable() {
    console.log(this.validate?.nativeElement);
    const btnObservable = fromEvent<MouseEvent>(
      this.validate?.nativeElement,
      'mouseover'
    );
    btnObservable.subscribe((event) => {
      console.log('event', event);
    });
  }
}

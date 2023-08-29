import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {
  constructor() { }
  public counter: number = 10;

  increaseBy(n: number = 1): void {
    this.counter += n
  }
  reset(): void {
    this.counter = 10
  }

  ngOnInit() { }
}

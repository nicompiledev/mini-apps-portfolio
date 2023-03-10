import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  clickCount: number = 0;

  incrementClickCount() {
    this.clickCount++;
  }

  decrementClickCount() {
    this.clickCount--;
  }

  resetClickCount() {
    this.clickCount = 0;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.css',
})
export class ChildCounterComponent {
  counter: number = 0;

  inc() {
    this.counter++;
  }

  dec() {
    this.counter--;
  }
}

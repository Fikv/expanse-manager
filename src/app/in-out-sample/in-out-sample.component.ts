import { Component } from '@angular/core';
import { InOutChildSampleComponent } from "../in-out-child-sample/in-out-child-sample.component";

@Component({
  selector: 'app-in-out-sample',
  standalone: true,
  imports: [InOutChildSampleComponent],
  templateUrl: './in-out-sample.component.html',
  styleUrl: './in-out-sample.component.css'
})
export class InOutSampleComponent {
  counter: number = 10;
  childCounter: number = 0;
  inc() {
    this.counter++
 }

 get(val: number) {
  this.childCounter = val;
 }
}


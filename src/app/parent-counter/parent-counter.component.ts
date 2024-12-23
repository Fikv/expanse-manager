import { Component } from '@angular/core';
import { ChildCounterComponent } from "../child-counter/child-counter.component";

@Component({
  selector: 'app-parent-counter',
  standalone: true,
  imports: [ChildCounterComponent],
  templateUrl: './parent-counter.component.html',
  styleUrl: './parent-counter.component.css'
})
export class ParentCounterComponent {

}

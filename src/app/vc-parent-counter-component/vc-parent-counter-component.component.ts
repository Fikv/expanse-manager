import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildCounterComponent } from '../child-counter/child-counter.component';

@Component({
  selector: 'app-vc-parent-counter-component',
  standalone: true,
  imports: [ChildCounterComponent],
  templateUrl: './vc-parent-counter-component.component.html',
  styleUrl: './vc-parent-counter-component.component.css',
})
export class VcParentCounterComponentComponent implements AfterViewInit {
  @ViewChild(ChildCounterComponent)
  private child! : ChildCounterComponent;

  inc() {
    this.child.inc();
  }

  dec() {
    this.child.dec();
  }

  counter() {return 0;}

  ngAfterViewInit(): void {
    setTimeout(() => this.counter = () => this.child.counter, 0)
  }
}

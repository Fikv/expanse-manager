import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-my-life-cycle-sample',
  standalone: true,
  imports: [],
  templateUrl: './my-life-cycle-sample.component.html',
  styleUrl: './my-life-cycle-sample.component.css',
})
export class MyLifeCycleSampleComponent implements OnChanges, OnInit {
  ngOnChanges() {
    console.log('Change detection');
  }

  ngOnInit() {
    console.log('Initialization of component / directive');
  }

  ngDoCheck() {
    console.log('Custom change detection');
  }

  ngAfterContentInit() {
    console.log('Content initialization');
  }

  ngAfterContentChecked() {
    console.log('Checking changes in content');
  }

  ngAfterViewInit() {
    console.log('View initialization');
  }

  ngAfterViewChecked() {
    console.log('Checking changes in views');
  }

  ngOnDestroy() {
    console.log('Destruction of component / directive');
  }
}

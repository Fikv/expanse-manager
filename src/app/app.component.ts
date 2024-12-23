import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { MyLifeCycleSampleComponent } from "./my-life-cycle-sample/my-life-cycle-sample.component";
import { ViewEcapsulationSampleComponent } from "./view-ecapsulation-sample/view-ecapsulation-sample.component";
import { InOutSampleComponent } from "./in-out-sample/in-out-sample.component";
import { ParentCounterComponent } from "./parent-counter/parent-counter.component";
import { VcParentCounterComponentComponent } from "./vc-parent-counter-component/vc-parent-counter-component.component";
import { MyCounterServiceComponent } from "./my-counter-service/my-counter-service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseEntryComponent, MyLifeCycleSampleComponent, ViewEcapsulationSampleComponent, InOutSampleComponent, ParentCounterComponent, VcParentCounterComponentComponent, MyCounterServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-manager';
}
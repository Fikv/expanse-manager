import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-ecapsulation-sample',
  standalone: true,
  imports: [],
  templateUrl: './view-ecapsulation-sample.component.html',
  styleUrl: './view-ecapsulation-sample.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEcapsulationSampleComponent {

}

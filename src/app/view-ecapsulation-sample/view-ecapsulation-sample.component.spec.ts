import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEcapsulationSampleComponent } from './view-ecapsulation-sample.component';

describe('ViewEcapsulationSampleComponent', () => {
  let component: ViewEcapsulationSampleComponent;
  let fixture: ComponentFixture<ViewEcapsulationSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEcapsulationSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEcapsulationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

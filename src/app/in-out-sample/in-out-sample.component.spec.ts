import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutSampleComponent } from './in-out-sample.component';

describe('InOutSampleComponent', () => {
  let component: InOutSampleComponent;
  let fixture: ComponentFixture<InOutSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InOutSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InOutSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

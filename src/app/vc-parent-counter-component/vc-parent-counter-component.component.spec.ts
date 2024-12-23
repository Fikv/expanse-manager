import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcParentCounterComponentComponent } from './vc-parent-counter-component.component';

describe('VcParentCounterComponentComponent', () => {
  let component: VcParentCounterComponentComponent;
  let fixture: ComponentFixture<VcParentCounterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcParentCounterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VcParentCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

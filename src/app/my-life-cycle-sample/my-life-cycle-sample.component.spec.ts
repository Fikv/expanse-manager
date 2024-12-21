import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifeCycleSampleComponent } from './my-life-cycle-sample.component';

describe('MyLifeCycleSampleComponent', () => {
  let component: MyLifeCycleSampleComponent;
  let fixture: ComponentFixture<MyLifeCycleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLifeCycleSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLifeCycleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

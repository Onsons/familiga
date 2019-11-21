import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrierePlanComponent } from './arriere-plan.component';

describe('ArrierePlanComponent', () => {
  let component: ArrierePlanComponent;
  let fixture: ComponentFixture<ArrierePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrierePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrierePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

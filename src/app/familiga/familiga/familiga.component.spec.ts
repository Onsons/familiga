import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiligaComponent } from './familiga.component';

describe('FamiligaComponent', () => {
  let component: FamiligaComponent;
  let fixture: ComponentFixture<FamiligaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiligaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

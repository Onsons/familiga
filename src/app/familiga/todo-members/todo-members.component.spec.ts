import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMembersComponent } from './todo-members.component';

describe('TodoMembersComponent', () => {
  let component: TodoMembersComponent;
  let fixture: ComponentFixture<TodoMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

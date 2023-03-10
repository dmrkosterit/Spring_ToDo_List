import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoViewComponent } from './todoview.component';

describe('TodoviewComponent', () => {
  let component: TodoViewComponent;
  let fixture: ComponentFixture<TodoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

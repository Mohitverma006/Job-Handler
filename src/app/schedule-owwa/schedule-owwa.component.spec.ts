import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOWWAComponent } from './schedule-owwa.component';

describe('ScheduleOWWAComponent', () => {
  let component: ScheduleOWWAComponent;
  let fixture: ComponentFixture<ScheduleOWWAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOWWAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOWWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

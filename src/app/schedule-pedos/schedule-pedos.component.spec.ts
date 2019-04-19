import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePEDOSComponent } from './schedule-pedos.component';

describe('SchedulePEDOSComponent', () => {
  let component: SchedulePEDOSComponent;
  let fixture: ComponentFixture<SchedulePEDOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePEDOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePEDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

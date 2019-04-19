import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOrderDetailComponent } from './job-order-detail.component';

describe('JobOrderDetailComponent', () => {
  let component: JobOrderDetailComponent;
  let fixture: ComponentFixture<JobOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicantComponent } from './pending-applicant.component';

describe('PendingApplicantComponent', () => {
  let component: PendingApplicantComponent;
  let fixture: ComponentFixture<PendingApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

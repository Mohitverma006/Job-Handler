import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicantComponent } from './all-applicant.component';

describe('AllApplicantComponent', () => {
  let component: AllApplicantComponent;
  let fixture: ComponentFixture<AllApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

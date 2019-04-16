import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicantListComponent } from './all-applicant-list.component';

describe('AllApplicantListComponent', () => {
  let component: AllApplicantListComponent;
  let fixture: ComponentFixture<AllApplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllApplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

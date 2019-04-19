import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalMedDetailComponent } from './final-med-detail.component';

describe('FinalMedDetailComponent', () => {
  let component: FinalMedDetailComponent;
  let fixture: ComponentFixture<FinalMedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalMedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalMedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

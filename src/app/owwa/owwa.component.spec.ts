import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OWWAComponent } from './owwa.component';

describe('OWWAComponent', () => {
  let component: OWWAComponent;
  let fixture: ComponentFixture<OWWAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OWWAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OWWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEDOSComponent } from './pedos.component';

describe('PEDOSComponent', () => {
  let component: PEDOSComponent;
  let fixture: ComponentFixture<PEDOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEDOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEDOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

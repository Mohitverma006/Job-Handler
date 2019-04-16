import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerDetailComponent } from './handler-detail.component';

describe('HandlerDetailComponent', () => {
  let component: HandlerDetailComponent;
  let fixture: ComponentFixture<HandlerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

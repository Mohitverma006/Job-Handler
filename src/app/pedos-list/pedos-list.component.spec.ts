import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedosListComponent } from './pedos-list.component';

describe('PedosListComponent', () => {
  let component: PedosListComponent;
  let fixture: ComponentFixture<PedosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

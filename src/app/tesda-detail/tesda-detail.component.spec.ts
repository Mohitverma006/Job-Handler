import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesdaDetailComponent } from './tesda-detail.component';

describe('TesdaDetailComponent', () => {
  let component: TesdaDetailComponent;
  let fixture: ComponentFixture<TesdaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesdaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesdaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

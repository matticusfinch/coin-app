import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDollarComponent } from './two-dollar.component';

describe('TwoDollarComponent', () => {
  let component: TwoDollarComponent;
  let fixture: ComponentFixture<TwoDollarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDollarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

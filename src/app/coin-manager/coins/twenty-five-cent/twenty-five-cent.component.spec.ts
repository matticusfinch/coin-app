import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFiveCentComponent } from './twenty-five-cent.component';

describe('TwentyFiveCentComponent', () => {
  let component: TwentyFiveCentComponent;
  let fixture: ComponentFixture<TwentyFiveCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFiveCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFiveCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyCentComponent } from './twenty-cent.component';

describe('TwentyCentComponent', () => {
  let component: TwentyCentComponent;
  let fixture: ComponentFixture<TwentyCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

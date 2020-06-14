import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCentComponent } from './one-cent.component';

describe('OneCentComponent', () => {
  let component: OneCentComponent;
  let fixture: ComponentFixture<OneCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

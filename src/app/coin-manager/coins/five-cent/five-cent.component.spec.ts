import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveCentComponent } from './five-cent.component';

describe('FiveCentComponent', () => {
  let component: FiveCentComponent;
  let fixture: ComponentFixture<FiveCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

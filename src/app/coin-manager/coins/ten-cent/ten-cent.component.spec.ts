import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenCentComponent } from './ten-cent.component';

describe('TenCentComponent', () => {
  let component: TenCentComponent;
  let fixture: ComponentFixture<TenCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

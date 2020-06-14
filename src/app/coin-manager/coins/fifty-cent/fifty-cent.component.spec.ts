import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyCentComponent } from './fifty-cent.component';

describe('FiftyCentComponent', () => {
  let component: FiftyCentComponent;
  let fixture: ComponentFixture<FiftyCentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyCentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

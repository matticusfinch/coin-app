import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonardComponent } from './leonard.component';

describe('LeonardComponent', () => {
  let component: LeonardComponent;
  let fixture: ComponentFixture<LeonardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeonardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeonardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

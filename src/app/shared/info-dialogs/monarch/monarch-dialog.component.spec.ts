import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonarchDialogComponent } from './monarch-dialog.component';

describe('MonarchDialogComponent', () => {
  let component: MonarchDialogComponent;
  let fixture: ComponentFixture<MonarchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonarchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonarchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

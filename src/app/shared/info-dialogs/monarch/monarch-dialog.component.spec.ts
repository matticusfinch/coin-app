import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonarchDialogComponent } from './monarch-dialog.component';

describe('MonarchDialogComponent', () => {
  let component: MonarchDialogComponent;
  let fixture: ComponentFixture<MonarchDialogComponent>;

  beforeEach(waitForAsync(() => {
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

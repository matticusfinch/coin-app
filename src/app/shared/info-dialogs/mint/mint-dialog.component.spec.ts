import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MintDialogComponent } from './mint-dialog.component';

describe('MintDialogComponent', () => {
  let component: MintDialogComponent;
  let fixture: ComponentFixture<MintDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MintDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

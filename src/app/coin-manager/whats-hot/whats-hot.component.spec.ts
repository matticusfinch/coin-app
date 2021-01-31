import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhatsHotComponent } from './whats-hot.component';

describe('WhatsHotComponent', () => {
  let component: WhatsHotComponent;
  let fixture: ComponentFixture<WhatsHotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

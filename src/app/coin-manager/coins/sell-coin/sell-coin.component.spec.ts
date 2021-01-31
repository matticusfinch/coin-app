import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SellCoinComponent } from './sell-coin.component';

describe('SellCoinComponent', () => {
  let component: SellCoinComponent;
  let fixture: ComponentFixture<SellCoinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

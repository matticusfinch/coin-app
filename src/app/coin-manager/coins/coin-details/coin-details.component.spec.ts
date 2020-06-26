import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailsComponent } from './coin-details.component';

describe('CoinDetailsComponent', () => {
  let component: CoinDetailsComponent;
  let fixture: ComponentFixture<CoinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

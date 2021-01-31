import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoinCardTemplateComponent } from './coin-card-template.component';

describe('CoinCardTemplateComponent', () => {
  let component: CoinCardTemplateComponent;
  let fixture: ComponentFixture<CoinCardTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinCardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCardTemplateComponent } from './coin-card-template.component';

describe('CoinCardTemplateComponent', () => {
  let component: CoinCardTemplateComponent;
  let fixture: ComponentFixture<CoinCardTemplateComponent>;

  beforeEach(async(() => {
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

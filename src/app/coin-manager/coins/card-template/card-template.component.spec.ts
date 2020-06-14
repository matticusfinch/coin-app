import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateComponent } from './card-template.component';

describe('CardTemplateComponent', () => {
  let component: CardTemplateComponent;
  let fixture: ComponentFixture<CardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedCardComponent } from './accepted-card.component';

describe('AcceptedCardComponent', () => {
  let component: AcceptedCardComponent;
  let fixture: ComponentFixture<AcceptedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

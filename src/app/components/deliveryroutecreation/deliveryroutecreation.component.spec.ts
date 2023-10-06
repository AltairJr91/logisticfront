import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryroutecreationComponent } from './deliveryroutecreation.component';

describe('DeliveryroutecreationComponent', () => {
  let component: DeliveryroutecreationComponent;
  let fixture: ComponentFixture<DeliveryroutecreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryroutecreationComponent]
    });
    fixture = TestBed.createComponent(DeliveryroutecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

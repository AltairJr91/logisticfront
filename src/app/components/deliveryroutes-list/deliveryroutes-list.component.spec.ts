import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryroutesListComponent } from './deliveryroutes-list.component';

describe('DeliveryroutesListComponent', () => {
  let component: DeliveryroutesListComponent;
  let fixture: ComponentFixture<DeliveryroutesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryroutesListComponent]
    });
    fixture = TestBed.createComponent(DeliveryroutesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

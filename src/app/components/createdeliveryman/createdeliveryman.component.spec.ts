import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedeliverymanComponent } from './createdeliveryman.component';

describe('CreatedeliverymanComponent', () => {
  let component: CreatedeliverymanComponent;
  let fixture: ComponentFixture<CreatedeliverymanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedeliverymanComponent]
    });
    fixture = TestBed.createComponent(CreatedeliverymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DeliveryroutslistService } from './deliveryroutslist.service';

describe('DeliveryroutslistService', () => {
  let service: DeliveryroutslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryroutslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

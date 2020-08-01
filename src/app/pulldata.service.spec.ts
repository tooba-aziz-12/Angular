import { TestBed } from '@angular/core/testing';

import { PulldataService } from './pulldata.service';

describe('PulldataService', () => {
  let service: PulldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PulldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TipserviceService } from './tipservice.service';

describe('TipserviceService', () => {
  let service: TipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

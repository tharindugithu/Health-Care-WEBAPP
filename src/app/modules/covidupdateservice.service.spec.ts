import { TestBed } from '@angular/core/testing';

import { CovidupdateserviceService } from './covidupdateservice.service';

describe('CovidupdateserviceService', () => {
  let service: CovidupdateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidupdateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

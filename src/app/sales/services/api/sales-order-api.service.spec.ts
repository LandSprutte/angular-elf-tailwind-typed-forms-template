import { TestBed } from '@angular/core/testing';

import { SalesOrderApiService } from './sales-order-api.service';

describe('SalesOrderApiService', () => {
  let service: SalesOrderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOrderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

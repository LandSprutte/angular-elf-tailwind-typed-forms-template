import { TestBed } from '@angular/core/testing';

import { SalesOrderProxyService } from './sales-order-proxy.service';

describe('SalesOrderProxyService', () => {
  let service: SalesOrderProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOrderProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SalesOrderMapperService } from './sales-order-mapper.service';

describe('SalesOrderMapperService', () => {
  let service: SalesOrderMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOrderMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

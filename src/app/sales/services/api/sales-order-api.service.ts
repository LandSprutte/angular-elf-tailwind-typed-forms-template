import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SalesOrderProxyService } from 'src/app/api-proxies/sales-order-proxy/sales-order-proxy.service';
import {
  SalesOrder,
  SalesOrderMapperService,
} from '../mappers/sales-order-mapper.service';

@Injectable()
export class SalesOrderApiService {
  constructor(
    private readonly mapper: SalesOrderMapperService,
    private readonly salesOrderProxyService: SalesOrderProxyService
  ) {}

  public getSalesOrders(): Observable<SalesOrder[]> {
    return this.salesOrderProxyService
      .getSalesOrders()
      .pipe(map((dtos) => dtos.map(this.mapper.fromDto)));
  }
}

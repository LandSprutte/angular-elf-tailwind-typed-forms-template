import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { SalesOrderDTO } from './sales-order-proxy.models';

const salesOrders: SalesOrderDTO[] = [
  {
    id: '1',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    price: 100,
    name: 'Sales Order 1',
    description: 'Description 1',
  },
  {
    id: '2',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    price: 100,
    name: 'Sales Order 2',
    description: 'Description 2',
  },
  {
    id: '3',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    price: 100,
    name: 'Sales Order 3',
    description: 'Description 3',
  },
  {
    id: '4',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    price: 100,
    name: 'Sales Order 4',
    description: 'Description 4',
  },
];

@Injectable()
export class SalesOrderProxyService {
  constructor() {}

  public getSalesOrders(): Observable<SalesOrderDTO[]> {
    return of(salesOrders).pipe(delay(3000));
  }
}

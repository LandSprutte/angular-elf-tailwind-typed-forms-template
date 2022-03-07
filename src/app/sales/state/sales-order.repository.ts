import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  addEntities,
  selectActiveId,
  selectEntities,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { tap } from 'rxjs';
import { SalesOrderApiService } from '../services/api/sales-order-api.service';
import { SalesOrder } from '../services/mappers/sales-order-mapper.service';

const store = createStore(
  { name: 'sales-orders' },
  withEntities<SalesOrder>(),
  withActiveId()
);

@Injectable({ providedIn: 'root' })
export class SalesOrderRepository {
  public readonly salesOrders$ = store.pipe(selectEntities());
  public readonly activeSaleOrderId = store.pipe(selectActiveId());

  constructor(private readonly salesOrderApiService: SalesOrderApiService) {}

  public getSalesOrders() {
    return this.salesOrderApiService
      .getSalesOrders()
      .pipe(tap((salesOrders) => store.update(addEntities(salesOrders))));
  }
}

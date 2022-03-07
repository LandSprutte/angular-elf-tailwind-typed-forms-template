import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthProxyService } from './auth-proxy/auth-proxy.service';
import { SalesOrderProxyService } from './sales-order-proxy/sales-order-proxy.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthProxyService, SalesOrderProxyService],
})
export class ApiProxiesModule {}

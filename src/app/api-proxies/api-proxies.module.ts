import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthProxyService } from './auth-proxy/auth-proxy.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthProxyService],
})
export class ApiProxiesModule {}

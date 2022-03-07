import { Injectable } from '@angular/core';
import { delay, from, map, Observable, timeout } from 'rxjs';
import {
  AuthPayload,
  UserDTO,
} from 'src/app/api-proxies/auth-proxy/auth-proxy.model';
import { AuthProxyService } from 'src/app/api-proxies/auth-proxy/auth-proxy.service';
import { AuthMapperService } from '../mappers/auth-mapper.service';

export type User = {
  name: string;
  id: string;
};

@Injectable()
export class AuthApiService {
  constructor(
    private readonly mapper: AuthMapperService,
    private readonly authProxyService: AuthProxyService
  ) {}

  public login(user: AuthPayload): Observable<User> {
    return this.authProxyService
      .login(user)
      .pipe(map((dto) => this.mapper.fromDto(dto)));
  }
}

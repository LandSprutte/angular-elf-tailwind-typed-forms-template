import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthPayload, UserDTO } from './auth-proxy.model';

@Injectable()
export class AuthProxyService {
  constructor() {}

  public login(user: AuthPayload): Observable<UserDTO> {
    return of(user).pipe(
      delay(1000),
      map(() => ({ name: 'John', id: '1', createdAt: '2020-01-01' }))
    );
  }
}

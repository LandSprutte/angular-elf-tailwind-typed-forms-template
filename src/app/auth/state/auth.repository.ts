import { Injectable } from '@angular/core';
import { createState, select, Store, withProps } from '@ngneat/elf';
import { tap } from 'rxjs';
import { AuthApiService } from '../services/api/auth-api.service';

export interface AuthProps {
  user: { name: string; id: string } | null;
}

const defaultState: AuthProps = {
  user: null,
};

const { state, config } = createState(withProps<AuthProps>(defaultState));
const store = new Store({ name: 'auth', state, config });

export type AuthStore = typeof store;

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  public readonly isLoggedIn$ = store.pipe(
    select((_authState) => !!_authState.user)
  );

  constructor(private readonly _authApiService: AuthApiService) {}

  public login(auth: { email: string; password: string }) {
    return this._authApiService
      .login(auth)
      .pipe(tap((user) => store.update((_authState) => ({ user }))));
  }
}

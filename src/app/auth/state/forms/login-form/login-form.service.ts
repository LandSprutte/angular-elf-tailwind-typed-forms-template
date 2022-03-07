import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TypedFormBuilder } from 'src/app/shared/utils/typed-form-builder';
import { AuthRepository } from '../../auth.repository';
import { createLoginForm, defaultValue } from './create-login-form';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  public readonly loginForm = createLoginForm(this.fb);

  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly authRepository: AuthRepository,
    private readonly route: Router
  ) {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  public reset() {
    this.loginForm.reset(defaultValue);
  }

  public submit() {
    this.authRepository.login(this.loginForm.value).subscribe({
      next: () => this.route.navigate(['/profile']),
    });
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormService } from '../../state/forms/login-form/login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public readonly form = this.loginFormService.loginForm;

  constructor(private readonly loginFormService: LoginFormService) {}

  public submit(_event: Event) {
    this.loginFormService.submit();
  }
}

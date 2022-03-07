import { Validators } from '@angular/forms';
import { TypedFormBuilder } from 'src/app/shared/utils/typed-form-builder';
import {
  TypedFormControl,
  TypedFormGroup,
} from 'src/app/shared/utils/typed-form-controls';

export type CreateLoginForm = TypedFormGroup<{
  email: TypedFormControl<string>;
  password: TypedFormControl<string>;
}>;

export type LoginFormType = CreateLoginForm['value'];

export const defaultValue: LoginFormType = {
  email: '',
  password: '',
};

export const createLoginForm = (
  fb: TypedFormBuilder,
  initialValue: LoginFormType = defaultValue
): CreateLoginForm => {
  const form = fb.group<CreateLoginForm>({
    email: [initialValue.email, Validators.required],
    password: [initialValue.password, Validators.required],
  });

  return form;
};

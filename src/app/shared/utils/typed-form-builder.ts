import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

import { Injectable } from '@angular/core';
import {
  TypedAbstractControl,
  TypedFormArray,
  TypedFormControl,
  TypedFormGroup,
} from './typed-form-controls';

export interface ControlsMap {
  [key: string]: AbstractControl;
}

export type TypedControlConfig<T extends AbstractControl> =
  T extends FormControl
    ?
        | TypedFormControl<T['value']>
        | [T['value']]
        | [T['value'], AbstractControlOptions['validators']]
        | [
            T['value'],
            AbstractControlOptions['validators'],
            AbstractControlOptions['asyncValidators']
          ]
    : T;

export type ControlsConfigMap<T extends ControlsMap> = {
  [P in keyof T]: TypedControlConfig<T[P]>;
};

@Injectable({ providedIn: 'root' })
export class TypedFormBuilder implements FormBuilder {
  public control<T>(
    formState: T,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): TypedFormControl<T> {
    return new TypedFormControl(formState, validatorOrOpts, asyncValidator);
  }

  public group<T extends TypedFormGroup<ControlsMap>>(
    controlsConfig: ControlsConfigMap<T['controls']>,
    options?: AbstractControlOptions | null
  ): T {
    const controls: T['controls'] = {};

    Object.keys(controlsConfig).forEach((controlName) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      controls[controlName] = this.createControl(controlsConfig[controlName]);
    });

    return new TypedFormGroup(controls, {
      updateOn: options?.updateOn || undefined,
      validators: options?.validators || null,
      asyncValidators: options?.asyncValidators || null,
    }) as T;
  }

  public array<T extends AbstractControl>(
    controlsConfig: TypedControlConfig<T>[],
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): TypedFormArray<T> {
    const controls = controlsConfig.map((c) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.createControl(c)
    );

    return new TypedFormArray(controls, validatorOrOpts, asyncValidator);
  }

  private createControl<T extends TypedAbstractControl<unknown>>(
    controlConfig: TypedControlConfig<T>
  ): T {
    if (this.isTypedAbstractControl(controlConfig)) {
      return controlConfig as T;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const [value, validator, asyncValidator] = controlConfig;
      return this.control(
        value,
        validator || null,
        asyncValidator || null
      ) as T;
    }
  }

  private isTypedAbstractControl(control: unknown): boolean {
    return (
      control instanceof TypedFormControl ||
      control instanceof TypedFormGroup ||
      control instanceof TypedFormArray
    );
  }
}

import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Observable } from 'rxjs';

export interface ControlsMap {
  [key: string]: AbstractControl;
}

export type TypedAbstractControl<T> = T extends {
  [key: string]: AbstractControl;
}
  ? TypedFormGroup<T>
  : T extends AbstractControl
  ? TypedFormArray<T>
  : TypedFormControl<T>;

interface ValueOptions {
  onlySelf?: boolean;
  emitEvent?: boolean;
}

type TypedFormGroupValue<T extends ControlsMap> = {
  [K in keyof T]: T[K]['value'];
};

export class TypedFormGroup<T extends ControlsMap> extends FormGroup {
  override value!: TypedFormGroupValue<T>;
  override controls!: T;
  override valueChanges!: Observable<T>;

  override setValue(value: T, options?: ValueOptions): void {
    super.setValue(value, options);
  }

  override patchValue(value: Partial<T>, options?: ValueOptions): void {
    super.patchValue(value, options);
  }

  override getRawValue(): T {
    return super.getRawValue();
  }
}

export class TypedFormControl<T> extends FormControl {
  override value!: T;
  override valueChanges!: Observable<T>;

  override setValue(
    value: T,
    options?: ValueOptions & {
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void {
    super.setValue(value, options);
  }

  override patchValue(value: Partial<T>, options?: ValueOptions): void {
    super.patchValue(value, options);
  }
}

export class TypedFormArray<T> extends FormArray {
  override value!: T[];
  override controls!: TypedAbstractControl<T>[];

  override setValue(value: T[], options?: ValueOptions): void {
    super.setValue(value, options);
  }

  override patchValue(value: T[], options?: ValueOptions): void {
    super.patchValue(value, options);
  }

  override getRawValue(): T[] {
    return super.getRawValue();
  }
}

export const buildFormGroup = <T>(object: T): TypedAbstractControl<T> => {
  if (!(object instanceof Object)) {
    return new TypedFormControl(object) as TypedAbstractControl<T>;
  }

  const formGroup = new TypedFormGroup({});

  Object.entries(object).forEach(([property, value]) => {
    if (Array.isArray(value)) {
      formGroup.addControl(
        property,
        new TypedFormArray(value.map((element) => buildFormGroup(element)))
      );
    } else if (value instanceof Object) {
      formGroup.addControl(property, buildFormGroup(value));
    } else {
      formGroup.addControl(property, new TypedFormControl(value));
    }
  });

  return formGroup as TypedAbstractControl<T>;
};

// src/validators/is-before-today.validator.ts

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsBeforeToday(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isBeforeToday',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          if (!value) return false;
          const inputDate = new Date(value);
          const today = new Date();

          // Zerar hora para comparar só a data
          inputDate.setHours(0, 0, 0, 0);
          today.setHours(0, 0, 0, 0);

          return inputDate <= today;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} não pode ser uma data futura`;
        },
      },
    });
  };
}

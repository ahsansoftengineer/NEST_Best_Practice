import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class Val implements ValidatorConstraintInterface {
  validate(userName: any, args: ValidationArguments) {
    const repo: any = null
    return repo.findOneByName(userName).then(user => {
      if (user) return false;
      return true;
    });
  }
}

export function VAL(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: Val,
    });
  };
}

// usage
// import { IsUserAlreadyExist } from './IsUserAlreadyExist';

// export class User {
//   @IsUserAlreadyExist({
//     message: 'User $value already exists. Choose another name.',
//   })
//   name: string;
// }

// Non Sync Valdation
// import { isEmpty, isBoolean } from 'class-validator';
// const value = ''
// isEmpty(value);
// isBoolean(value);
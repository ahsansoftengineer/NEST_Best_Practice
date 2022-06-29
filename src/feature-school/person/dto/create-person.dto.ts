import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { GENDER, USERROLE } from '../entities/person.entity';

export class CreatePersonDto  {
  @IsNotEmpty()
  @Length(3, 20)
  title: string

  middleName: string

  lastName: string

  @Length(7, 20)
  username: string

  @IsEmail()
  @Length(7, 20)
  email: string;

  password: string

  @IsNotEmpty()
  @IsEnum(GENDER, { each: true })
  gender: GENDER;

  dateOfBirth: Date

  @IsNotEmpty()
  @IsEnum(USERROLE, { each: true })
  role: USERROLE

  // @IsEnum(Address, { array: true })
  // address: Address[]
}
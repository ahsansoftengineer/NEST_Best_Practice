import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { GENDER, USERROLE } from '../entities/person.entity';

export class CreatePersonDto  {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 20)
  title: string

  @ApiProperty()
  middleName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  @Length(7, 20)
  username: string

  @ApiProperty()
  @IsEmail()
  @Length(7, 20)
  email: string;

  @ApiProperty()
  @Length(7, 20)
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GENDER)
  gender: GENDER;

  @ApiProperty()
  @IsDateString()
  dateOfBirth: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(USERROLE)
  role: USERROLE

  // @IsEnum(Address, { array: true })
  // address: Address[]
}
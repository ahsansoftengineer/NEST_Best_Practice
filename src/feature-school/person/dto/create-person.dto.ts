import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { CreateDto } from 'core/CreateDto';
import { GENDER, USERROLE } from '../entities/person.entity';

// enum ContactPreference{
//   EMAIL = 'email',
//   PHONE = 'phone'
// }
export class CreatePersonDto extends CreateDto {
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

  // @ApiProperty()
  // @IsNotEmpty()
  // contactPreference: ContactPreference

  // @ValidateIf(o => o.contactPreference === ContactPreference.EMAIL)
  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @ValidateIf(o => o.contactPreference === ContactPreference.PHONE)
  // @IsNotEmpty()
  // @IsPhoneNumber()
  // @IsNotEmpty()
  // phone: string;

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
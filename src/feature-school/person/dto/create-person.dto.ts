import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
import { CreateDto } from 'core/CreateDto';
import { Address } from 'feature-school/address/entities/address.entity';
import { IsNull } from 'typeorm';
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
  @ApiProperty({
    example: 'abc@gmail.com'
  })
  @IsEmail()
  email: string;

  // @ValidateIf(o => o.contactPreference === ContactPreference.PHONE)
  // @IsNotEmpty()
  // @IsPhoneNumber()
  // @IsNotEmpty()
  // phone: string;

  @ApiProperty() 
  @Length(7, 20)
  password: string

  @ApiProperty({
    enum: GENDER,
    // isArray: true,
    // example: [GENDER.MALE, GENDER.FEMALE],
    example: GENDER.MALE
  })
  @IsNotEmpty()
  @IsEnum(GENDER)
  gender: GENDER;

  @ApiProperty({
    example: '1992-07-04'
  })
  @IsDateString()
  dateOfBirth: string

  @ApiProperty({
    enum: USERROLE,
    example: USERROLE.ADMIN,
  })
  @IsNotEmpty()
  @IsEnum(USERROLE)
  role: USERROLE

  // @ApiProperty({
  //   enum: Address,
  //   example: [{title: 'My Address', desc: "Any Description u want"}],
  //   description:'Address[] Token is Optional'
  // })
  // @IsOptional()
  // address?: Address[]
}
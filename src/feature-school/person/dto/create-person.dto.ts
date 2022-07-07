import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
  Max,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateDto } from 'core/CreateDto';
import { CreateAddressDto } from 'feature-school/address/dto/create-address.dto';
import { Address } from 'feature-school/address/entities/address.entity';
import { GENDER } from '../entities/person.entity';

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
  @Length(3, 20)
  @IsOptional()
  middleName: string

  @ApiProperty()
  @Length(3, 20)
  @IsNotEmpty()
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
  @Length(3, 20)
  @IsOptional()
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
  @IsOptional()
  dateOfBirth: string

  @ApiProperty({
    enum: Address,
    example: [{title: 'My Address', desc: "Any Description u want"}],
    description:'Address[] Token is Optional'
  })
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address?: Address[]

  @ApiProperty({
    example: '1992-07-04'
  })
  @IsOptional()
  @MaxLength(100)
  image: string
  // @IsArray()
  // @ValidateIf(x => x.address)


}
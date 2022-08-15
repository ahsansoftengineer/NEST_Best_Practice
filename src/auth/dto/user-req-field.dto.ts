import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { GENDER, ROLE, STATUS } from 'core/enums';

export class UserReqFieldDto {
  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  email: string;

  @ApiProperty({
    enum: STATUS,
    isArray: false,
    example: STATUS.PENDING,
    default: STATUS.PENDING,
  })
  @IsOptional()
  @IsEnum(STATUS, {
    message: 'Status must be (Active, Pending, Block, Reject)',
  })
  status: STATUS;

  @ApiProperty({
    enum: ROLE,
    isArray: false,
    example: ROLE.LAWYER,
    default: ROLE.LAWYER,
  })
  @IsOptional()
  @IsEnum(ROLE, {
    message: 'Role must be (Admin, Lawyer, Client, User)',
  })
  role: ROLE;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    enum: GENDER,
    isArray: false,
    example: GENDER.MALE,
  })
  @IsNotEmpty()
  @IsEnum(GENDER)
  gender: GENDER;

  @IsNotEmpty()
  @Length(11, 17)
  @ApiProperty()
  mobile: string;

  @IsOptional()
  @ApiProperty()
  address: string;

  @IsOptional()
  @ApiProperty()
  image?: string;

  @ApiProperty({description:
    'Location is optional '})
  @IsOptional()
  location?:string;
}

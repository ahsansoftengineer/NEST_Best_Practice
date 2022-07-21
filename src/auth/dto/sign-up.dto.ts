import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { GENDER, ROLE, STATUS } from 'core/enums';
import { Match } from 'core/validator';
import { SignInDto } from './sign-in.dto';

export class SignUpDto extends SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  // Status and Role Must be comment out in Production
  @ApiProperty({
    enum: STATUS,
    isArray: false,
    example: STATUS.PENDING,
    default: STATUS.PENDING
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
    default: ROLE.LAWYER
  })
  @IsOptional()
  @IsEnum(ROLE, {
    message: 'Role must be (Admin, Lawyer, Client, User)',
  })
  role: ROLE;

  @ApiProperty({
    description:
      'password must has special character, alpha numeric and capital / small letters',
  })
  @IsNotEmpty()
  @Length(7, 20, { message: 'Confirm Password must be equal to Password' })
  @Match('password', {
    message: 'Confirm Password does not match with the Password',
  })
  confirmPassword: string;

  @IsNotEmpty()
  @Length(11, 17)
  mobile: string;

  @ApiProperty({
    enum: GENDER,
    isArray: false,
    example: GENDER.MALE,
  })
  @IsNotEmpty()
  @IsEnum(GENDER)
  gender: GENDER;

  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @IsOptional()
  address: string;

  @IsOptional()
  image: string;
}
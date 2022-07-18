import { ApiProperty } from '@nestjs/swagger';
import { COURT, GENDER, SPECIALIZATION } from 'auth/entities/user.entity';
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ROLE } from 'core/enums';
import { Match } from 'core/validator';
import { SignInDto } from './sign-in.dto';

export class SignUpDto extends SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    enum: ROLE,
    isArray: false,
    example: ROLE.ADMIN,
  })
  @IsNotEmpty()
  @IsEnum(ROLE, {
    message: 'Type must be (Admin, Lawyer, Client, User)',
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
  city: string;

  @ApiProperty({
    enum: SPECIALIZATION,
    isArray: false,
    example: SPECIALIZATION.CIVIL,
  })
  @IsNotEmpty()
  @IsEnum(SPECIALIZATION)
  specialization: SPECIALIZATION;

  @ApiProperty({
    enum: COURT,
    isArray: false,
    example: COURT.HIGH,
  })
  @IsNotEmpty()
  @IsEnum(COURT)
  court: COURT;

  // @IsNotEmpty()
  // @Length(11, 17)
  @IsOptional()
  address: string;

  @IsOptional()
  image: string;
}
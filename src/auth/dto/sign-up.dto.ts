import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, Length } from 'class-validator';
import { ROLE } from 'core/enums';
import { Match } from 'core/validator';
import { SignInDto } from './sign-in.dto';

export class SignUpDto extends SignInDto {
  @ApiProperty({
    enum: ROLE,
    isArray: false,
    example: ROLE.ADMIN,
  })
  @IsNotEmpty()
  @IsEnum(ROLE, {
    message: 'Type must be (Admin, Layer, Client',
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
}
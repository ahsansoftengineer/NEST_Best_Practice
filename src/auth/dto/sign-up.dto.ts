import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { GENDER, ROLE, STATUS } from 'core/enums';
import { Match } from 'core/validator';
import { SignInDto } from './sign-in.dto';
import { UserReqFieldDto } from './user-req-field.dto';

export class SignUpDto extends IntersectionType(SignInDto, UserReqFieldDto) {
  // Status and Role Must be comment out in Production

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

  @ApiProperty()
  @IsOptional()
  // @IsNumber()
  cityId: number;
}

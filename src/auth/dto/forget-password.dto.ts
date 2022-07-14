import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, Matches } from "class-validator";
import { Match } from "core/utils";

export class ForgetPassword{

  @ApiProperty({
    description:
      'password must has special character, alpha numeric and capital / small letters',
  })
  @IsNotEmpty()
  @Length(7, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must has special character, alpha numeric and capital / small letters',
  })
  password: string;

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

  changePasswordCode: string
}
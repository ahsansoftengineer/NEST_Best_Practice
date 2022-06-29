import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, ValidateIf } from "class-validator"
import { BaseModelClass } from "shared/BaseClass"

enum ContactPreference{
  EMAIL = 'email',
  PHONE = 'phone'
}
export class User extends BaseModelClass{
  @ApiProperty()
  @Length(18, 150)
  @IsNotEmpty()
  age: number

  @ApiProperty()
  @IsNotEmpty()
  gender:string

  @ApiProperty()
  @IsNotEmpty()
  contactPreference: ContactPreference

  @ValidateIf(o => o.contactPreference === ContactPreference.EMAIL)
  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateIf(o => o.contactPreference === ContactPreference.PHONE)
  @IsNotEmpty()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
}

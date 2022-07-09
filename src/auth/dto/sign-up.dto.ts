import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { PERSON_TYPE } from "feature-school/person/entities/person.entity";
import { Match } from "core/utils";
import { SignInDto } from "./sign-in.dto";

export class SignUpDto extends SignInDto {
  @ApiProperty({
    enum: PERSON_TYPE,
    isArray: false,
    example: PERSON_TYPE.TEACHER
  })
  @IsNotEmpty()
  @IsEnum(PERSON_TYPE, {message: "Type must be (Admin, Principal, Teacher, Parent and Student"})
  type: PERSON_TYPE

  @ApiProperty({
    description: 'password must has special character, alpha numeric and capital / small letters'
  })
  @IsNotEmpty()
  @Length(7, 20, {message: 'Confirm Password must be equal to Password'})
  @Match('password', {message: 'Confirm Password does not match with the Password'})
  confirmPassword: string
}

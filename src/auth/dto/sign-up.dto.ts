import { ApiProperty } from "@nestjs/swagger";
import { hash } from "bcrypt";
import { IsEnum, IsNotEmpty, Length, Matches } from "class-validator";
import { PERSON_TYPE } from "feature-school/person/entities/person.entity";
import { BeforeInsert } from "typeorm";
import { SignInDto } from "./sign-in.dto";

export class SignUpDto extends SignInDto {
  @ApiProperty({
    enum: PERSON_TYPE,
    isArray: false,
    example: PERSON_TYPE.TEACHER
  })
  @IsNotEmpty()
  @IsEnum(PERSON_TYPE)
  type: PERSON_TYPE
}

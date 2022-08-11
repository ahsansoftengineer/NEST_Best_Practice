import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AdminSendMailDto {

  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(7, 60)
  html: string;

}

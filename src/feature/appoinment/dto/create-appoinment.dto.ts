import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsPhoneNumber, Length } from "class-validator";
import { CreateDto } from "core/base";

export class CreateAppoinmentDto extends CreateDto {


  @ApiProperty({
    description: 'email is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  mobile: string;

  @ApiProperty()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  time: string;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class CreateDto  {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 20)
  title: string

  @ApiProperty()
  @MaxLength(100)
  desc: string
}
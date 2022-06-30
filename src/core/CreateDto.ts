import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

export class CreateDto  {
  @ApiProperty({
    description: 'This Title Property Means the Major Property of the Table'
  })
  @IsNotEmpty()
  @Length(3, 20)
  title: string

  @ApiProperty({
    description: 'Other usefull information'
  })
  @MaxLength(100)
  @IsOptional()
  desc?: string
}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

export class CreateDto  {
  @ApiProperty({
    description: 'This Title Property Means the Major Property of the Table'
  })
  @IsNotEmpty()
  @Length(3, 40)
  title: string

  @ApiProperty({
    description: 'Other usefull information'
  })
  @MaxLength(100)
  @IsOptional()
  desc?: string
}
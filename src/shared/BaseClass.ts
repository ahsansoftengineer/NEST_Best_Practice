import { ApiProperty } from "@nestjs/swagger"
import { IsAlpha, IsNotEmpty, IsNumber, Length, Min } from "class-validator"

export class BaseModelClass{
  @ApiProperty()
  @Min(1)
  @IsNumber()
  id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsAlpha()
  title: string
}
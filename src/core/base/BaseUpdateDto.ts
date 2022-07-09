import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Length } from "class-validator";
import { CreateDto } from "./BaseCreateDto";

export class UpdateDto extends CreateDto  {
  @ApiProperty()
  @IsNumber()
  id: number
}
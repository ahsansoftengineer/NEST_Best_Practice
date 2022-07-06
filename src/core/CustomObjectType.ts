import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

// Doesnt Required
export class CustomObjectType  {
  @ApiProperty({
    description: 'Refered to id Of the Object'
  })
  @IsNotEmpty()
  id: number
}
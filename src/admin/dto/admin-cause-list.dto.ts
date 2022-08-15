import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AdminCauseListDto {

  @ApiProperty()
  @IsNumber()
  courtId: number;

  @ApiProperty()
  @IsNumber()
  lawyerId: number;

  @ApiProperty()
  @IsString()
  nexthearing: string;
  
}

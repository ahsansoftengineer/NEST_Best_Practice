import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateDto } from "core/base";
export class CreateLawyerCaseDto extends CreateDto{

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  suit: string;

  @ApiProperty()
  @IsNotEmpty()
  courtId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  cityId: number;

  @ApiProperty()
  @IsNotEmpty()
  lasthearing : string;

  @ApiProperty()
  @IsNotEmpty()
  nexthearing : string;
  
  @IsOptional()
  lawyerId: number;
}
export class UpdateLawyerCaseDto extends PartialType(CreateLawyerCaseDto) {}

import { ApiProperty, PartialType } from "@nestjs/swagger";
<<<<<<< HEAD
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
=======
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
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

<<<<<<< HEAD
=======
  @IsOptional()
  lawyerId: number;

>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1

}


export class UpdateLawyerCaseDto extends PartialType(CreateLawyerCaseDto) {}



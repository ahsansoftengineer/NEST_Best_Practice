import { PartialType } from "@nestjs/swagger";
import { SignUpDto } from "auth/dto";
import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateLawyerTeamDto extends SignUpDto {
  @IsNotEmpty()
  responsibility: string;

  @IsNotEmpty()
  timing: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNumber()
  lawyerId: number 



}

export class UpdateLawyerTeamDto extends PartialType(CreateLawyerTeamDto) {}


import { PartialType } from "@nestjs/swagger";
import { SignUpDto } from "auth/dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLawyerTeamDto extends SignUpDto {
  @IsNotEmpty()
  responsibility: string;

  @IsNotEmpty()
  timing: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}

export class UpdateLawyerTeamDto extends PartialType(CreateLawyerTeamDto) {}


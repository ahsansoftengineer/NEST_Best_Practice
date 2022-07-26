import { PartialType } from "@nestjs/swagger";
import { SignUpDto } from "auth/dto";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateLawyerClientDto extends SignUpDto  {
  @IsNumberString()
  @IsNotEmpty()
  lawyerId: number

  @IsString()
  @IsNotEmpty()
  type: string

  @IsString()
  @IsNotEmpty()
  suite: string
  
}

export class UpdateLawyerClientDto extends PartialType(CreateLawyerClientDto) {}

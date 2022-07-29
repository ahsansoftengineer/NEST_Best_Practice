import { PartialType } from '@nestjs/swagger';
import { UserReqFieldDto } from 'auth/dto/user-req-field.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateLawyerTeamDto extends UserReqFieldDto {
  @IsNotEmpty()
  responsibility: string;

  @IsNotEmpty()
  timing: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  lawyerId: number;
}

export class UpdateLawyerTeamDto extends PartialType(CreateLawyerTeamDto) {}

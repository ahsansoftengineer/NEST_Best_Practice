import { PartialType } from '@nestjs/swagger';
import { SignUpDto } from 'auth/dto';
import { IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class CreateLawyerDto extends SignUpDto {
  @IsOptional()
  @IsNumberString()
  id: number; 

  @IsNumberString()
  specializationId: number;

  @IsNumber({}, { each: true })
  courtIds: number[];
}
export class UpdateLawyerDto extends PartialType(CreateLawyerDto) {}

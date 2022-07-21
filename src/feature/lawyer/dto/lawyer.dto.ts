import { PartialType } from '@nestjs/swagger';
import { SignUpDto } from 'auth/dto';

export class CreateLawyerDto extends SignUpDto {
  id: number;
  specializationId: number;
  courtIds: number[];
}
export class UpdateLawyerDto extends PartialType(CreateLawyerDto) {}

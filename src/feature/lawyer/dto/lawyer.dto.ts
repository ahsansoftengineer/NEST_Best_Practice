import { PartialType } from '@nestjs/swagger';
import { SignUpDto } from 'auth/dto';

export class CreateLawyerDto extends SignUpDto {}
export class UpdateLawyerDto extends PartialType(CreateLawyerDto) {
  id: number;
  specializationId: number;
  courts: number[];
}

import { PartialType } from '@nestjs/swagger';
import { CreateLawyerDto } from './create-lawyer.dto';

export class UpdateLawyerDto extends PartialType(CreateLawyerDto) {}

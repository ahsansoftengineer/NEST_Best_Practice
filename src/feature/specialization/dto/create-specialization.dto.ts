import { PartialType } from '@nestjs/swagger';
import { CreateDto } from 'core/base';

export class CreateSpecializationDto extends CreateDto {}

export class UpdateSpecializationDto extends PartialType(
  CreateSpecializationDto,
) {}

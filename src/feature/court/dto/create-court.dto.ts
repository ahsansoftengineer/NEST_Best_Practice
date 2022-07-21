import { CreateDto } from 'core/base';
import { PartialType } from '@nestjs/swagger';

export class CreateCourtDto extends CreateDto {}
export class UpdateCourtDto extends PartialType(CreateCourtDto) {}

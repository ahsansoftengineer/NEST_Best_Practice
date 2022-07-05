import { PartialType } from '@nestjs/swagger';
import { CreateReportzDto } from './create-reportz.dto';

export class UpdateReportzDto extends PartialType(CreateReportzDto) {}

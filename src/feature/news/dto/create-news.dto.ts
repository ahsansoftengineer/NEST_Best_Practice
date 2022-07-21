import { PartialType } from '@nestjs/swagger';
import { CreateDto } from 'core/base';

export class CreateNewsDto extends CreateDto {}
export class UpdateNewsDto extends PartialType(CreateNewsDto) {}

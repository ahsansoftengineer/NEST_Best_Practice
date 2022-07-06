import { PartialType } from '@nestjs/swagger';
import { CreateDifferentDbDto } from './create-different-db.dto';

export class UpdateDifferentDbDto extends PartialType(CreateDifferentDbDto) {}

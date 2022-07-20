import { PartialType } from '@nestjs/swagger';
import { CreatePlayDto } from './create-play.dto';

export class UpdatePlayDto extends PartialType(CreatePlayDto) {}

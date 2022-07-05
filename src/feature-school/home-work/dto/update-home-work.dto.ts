import { PartialType } from '@nestjs/swagger';
import { CreateHomeWorkDto } from './create-home-work.dto';

export class UpdateHomeWorkDto extends PartialType(CreateHomeWorkDto) {}

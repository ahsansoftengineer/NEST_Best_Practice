import { PartialType } from '@nestjs/swagger';
import { CreateDto } from 'core/base';

export class CreateCityDto extends CreateDto {}

export class UpdateCityDto extends PartialType(CreateCityDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { UpdateDto } from 'core/UpdateDto';
import { CreateSchoolDto } from './create-school.dto';

export class UpdateSchoolDto extends PartialType(UpdateDto) {}

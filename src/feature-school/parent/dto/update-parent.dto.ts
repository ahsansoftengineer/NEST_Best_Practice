import { PartialType } from '@nestjs/mapped-types';
import { UpdatePersonDto } from 'feature-school/person/dto/update-person.dto';
import { CreateParentDto } from './create-parent.dto';

export class UpdateParentDto extends PartialType(UpdatePersonDto) {}

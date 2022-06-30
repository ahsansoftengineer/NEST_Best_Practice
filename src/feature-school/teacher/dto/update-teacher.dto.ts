import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from 'feature-school/person/dto/create-person.dto';
import { CreateTeacherDto } from './create-teacher.dto';

export class UpdateTeacherDto  extends PartialType(CreatePersonDto) {}

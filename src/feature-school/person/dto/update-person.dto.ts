import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Min } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

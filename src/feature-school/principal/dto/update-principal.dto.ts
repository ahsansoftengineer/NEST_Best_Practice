import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from 'feature-school/person/dto/create-person.dto';
import { CreatePrincipalDto } from './create-principal.dto';

export class UpdatePrincipalDto extends PartialType(CreatePersonDto) {}

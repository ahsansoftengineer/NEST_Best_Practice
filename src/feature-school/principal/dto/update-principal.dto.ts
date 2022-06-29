import { PartialType } from '@nestjs/mapped-types';
import { CreatePrincipalDto } from './create-principal.dto';

export class UpdatePrincipalDto extends PartialType(CreatePrincipalDto) {}

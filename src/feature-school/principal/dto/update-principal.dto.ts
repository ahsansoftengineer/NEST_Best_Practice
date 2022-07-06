import { PartialType } from '@nestjs/swagger';
import { CreatePrincipalDto } from './create-principal.dto';

export class UpdatePrincipalDto extends PartialType(CreatePrincipalDto) {}

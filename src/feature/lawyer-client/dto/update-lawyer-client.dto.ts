import { PartialType } from '@nestjs/swagger';
import { CreateLawyerClientDto } from './create-lawyer-client.dto';

export class UpdateLawyerClientDto extends PartialType(CreateLawyerClientDto) {}

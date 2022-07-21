import { PartialType } from '@nestjs/swagger';
import { CreateAppoinmentDto } from './create-appoinment.dto';

export class UpdateAppoinmentDto extends PartialType(CreateAppoinmentDto) {}

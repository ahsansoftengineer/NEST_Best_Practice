import { PartialType } from '@nestjs/mapped-types';
import { UpdateDto } from 'core/UpdateDto';
import { CreateAddressDto } from './create-address.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}

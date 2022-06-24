import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  id: number;
}

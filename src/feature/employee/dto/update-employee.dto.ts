import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

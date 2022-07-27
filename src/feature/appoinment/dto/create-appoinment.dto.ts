import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateDto } from 'core/base';

export class CreateAppoinmentDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  time: string;
}

export class UpdateAppoinmentDto extends PartialType(CreateAppoinmentDto) {}


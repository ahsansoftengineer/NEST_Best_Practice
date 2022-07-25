import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CreateDto } from 'core/base';
import { STATUS_TASK } from 'core/enums';

export class CreateTaskDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STATUS_TASK, {
    message: 'Status must be (Compelete, Pending, Process)',
  })
  status: STATUS_TASK;
}

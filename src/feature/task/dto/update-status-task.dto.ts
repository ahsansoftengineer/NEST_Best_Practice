import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { STATUS_TASK } from 'core/enums';

export class UpdateStatusTaskDto{
  @ApiProperty({
    enum: STATUS_TASK,
    isArray: false,
    example: STATUS_TASK.ASSIGN,
    default: STATUS_TASK.ASSIGN,
  })
  @IsNotEmpty()
  @IsEnum(STATUS_TASK, {
    message: 'Status must be (Compelete, Pending, Process)',
  })
  status: STATUS_TASK;

  @IsOptional()
  @ApiProperty()
  pdf: string; 

  @ApiProperty()
  @IsNotEmpty()
  feedback: string;

  @IsNumber()
  @IsNotEmpty()
  id:number

}

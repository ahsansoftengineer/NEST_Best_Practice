import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateDto } from 'core/base';
import { STATUS_TASK } from 'core/enums';

export class CreateLawyerTaskDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STATUS_TASK, {
    message: 'Status must be (Compelete, Pending, Process)',
  })
  status: STATUS_TASK;
}

export class CreateTeamTaskDto extends CreateLawyerTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STATUS_TASK, {
    message: 'Status must be (Compelete, Pending, Process)',
  })
  status: STATUS_TASK;

  // @IsNumber()
  // @IsNotEmpty()
  // lawyerId: number 

  @IsNumber()
  @IsNotEmpty()
  lawyerTeamId: number 

}

// export class UpdateTaskDto extends PartialType(CreateTaskDto) {}


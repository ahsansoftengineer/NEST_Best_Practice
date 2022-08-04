import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional } from 'class-validator';
import { CreateDto } from 'core/base';
import { STATUS_TASK } from 'core/enums';

export class CreateLawyerTaskDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STATUS_TASK, {
    message: 'Status must be (Compelete, Pending, Process)',
  })
  status: STATUS_TASK;

  @IsOptional()
  @ApiProperty()
  pdf: string;
}

export class CreateTeamTaskDto extends CreateLawyerTaskDto {
  // @IsNumber()
  // @IsNotEmpty()
  // lawyerId: number

  @IsNumberString()
  @IsNotEmpty()
  lawyerTeamId: number;
}

// export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

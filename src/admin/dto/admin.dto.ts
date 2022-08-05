import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsNumberString } from 'class-validator';
import { STATUS } from 'core/enums';

export class ChangeStatusDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty({
    enum: STATUS,
    isArray: false,
    example: STATUS.PENDING,
    default: STATUS.PENDING,
  })
  @IsEnum(STATUS, {
    message: 'Status must be (Active, Pending, Block, Reject)',
  })
  status: STATUS;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString, Min } from 'class-validator';

export class CreateStudentClassDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateFrom: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateTo: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  studentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  classRoomId: number;
}

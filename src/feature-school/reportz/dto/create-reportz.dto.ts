import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Min } from 'class-validator';
import { CreateDto } from 'core/base';
import { Student } from 'feature-school/student/entities/student.entity';

export class CreateReportzDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 40)
  teacherComments: string;

  @ApiProperty({
    description: 'Student Entity Id',
  })
  @IsNotEmpty()
  @Min(0)
  studentId: number;
}

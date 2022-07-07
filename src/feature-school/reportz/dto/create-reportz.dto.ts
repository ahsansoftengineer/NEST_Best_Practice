import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, Length, Min } from "class-validator"
import { CreateDto } from "core/CreateDto"
import { Student } from "feature-school/student/entities/student.entity"

export class CreateReportzDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 40)
  teacherComments: string

  @ApiProperty({
    enum: Student,
    isArray: false,
    example: [{id: 101}],
  })
  // @ValidateNested()
  // @Type(() => CreateStudentDto)
  student?: Student

  @ApiProperty({
    description:"Student Entity Id"
  })
  @IsNotEmpty()
  @Min(1)
  studentId: number


}
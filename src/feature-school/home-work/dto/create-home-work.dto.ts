import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { CreateDto } from "core/CreateDto";
import { Student } from "feature-school/student/entities/student.entity";

export class CreateHomeWorkDto extends CreateDto {

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 40)
  homeWorkContent: string

  @ApiProperty({
    example: 1,
    description:"Student Entity Id"
  })
  @IsNotEmpty()
  @Min(1)
  studentId: number
}
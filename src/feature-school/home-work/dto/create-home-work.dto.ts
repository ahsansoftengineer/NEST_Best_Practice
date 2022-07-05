import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length } from "class-validator";
import { CreateDto } from "core/CreateDto";
import { Student } from "feature-school/student/entities/student.entity";

export class CreateHomeWorkDto extends CreateDto {

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 40)
  homeWorkContent: string

  @ApiProperty({
    enum: Student,
    example: [{id: '101', desc: "student id for Home work"}],
    description:'student id for Home work'
  })
  // @ValidateNested()
  // @Type(() => CreateAddressDto)
  student?: Student

}
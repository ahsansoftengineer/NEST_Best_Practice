import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsDateString, IsNotEmpty, Length, ValidateNested } from "class-validator"
import { CustomObjectType } from "core/CustomObjectType"
import { CreateAddressDto } from "feature-school/address/dto/create-address.dto"
import { Student } from "feature-school/student/entities/student.entity"
import { Subject } from "feature-school/subject/entities/subject.entity"
import { Teacher } from "feature-school/teacher/entities/teacher.entity"

export class CreateClassRoomDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 20)
  classCode: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateFrom: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateTo: Date

  @ApiProperty({
    enum: CustomObjectType,
    isArray: false,
    example: {id: 1},
    description:'Teacher Token is Required'
  })
  @ValidateNested()
  @Type(() => CustomObjectType)
  teacher: Teacher

  @ApiProperty({
    enum: CustomObjectType,
    example: [{id: 1}, {id: 2}],
    description:'Students Token is Optional'
  })
  @ValidateNested()
  @Type(() => CustomObjectType)
  students: Student[]

  @ApiProperty({
    enum: Subject,
    example: {id: 1},
    description:'Students Token is Optional'
  })
  @ValidateNested()
  @Type(() => CustomObjectType)
  subject: Subject
}

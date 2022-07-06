import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, Length, Min } from "class-validator"
import { CreateDto } from "core/CreateDto"

export class CreateClassRoomDto extends CreateDto {
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

  @ApiProperty()
  @Min(0)
  // @ValidatePromise()
  teacherId: number

  @ApiProperty()
  @Min(0)
  // @ValidatePromise()
  subjectId: number

  // @ApiProperty({
  //   enum: CustomObjectType,
  //   isArray: false,
  //   example: {id: 1},
  //   description:'Teacher Token is Required'
  // })
  // @ValidateNested()
  // @Type(() => CustomObjectType)
  // teacher: Teacher

  // @ApiProperty({
  //   enum: Subject,
  //   example: {id: 1},
  //   description:'Students Token is Optional'
  // })
  // @ValidateNested()
  // @Type(() => CustomObjectType)
  // subject: Subject
  // @ApiProperty({
  //   enum: CustomObjectType,
  //   example: [{id: 1}, {id: 2}],
  //   description:'Students Token is Optional'
  // })
  // @ValidateNested()
  // @Type(() => CustomObjectType)
  // students: Student[]


}

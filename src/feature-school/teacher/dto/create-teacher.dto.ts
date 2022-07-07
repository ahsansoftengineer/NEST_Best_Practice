import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";
import { CreatePersonDto } from "feature-school/person/dto/create-person.dto";

export class CreateTeacherDto  extends CreatePersonDto{
  @ApiProperty({
    description:"Principal Entity"
  })
  @IsNotEmpty()
  @Min(0)
  principalId: number
}

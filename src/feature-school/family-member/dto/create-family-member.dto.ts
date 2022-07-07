import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";
import { CreateDto } from "core/CreateDto";

export class CreateFamilyMemberDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  studentId: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  parentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  familyId: number
}

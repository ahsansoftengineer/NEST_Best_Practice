import { ApiProperty } from "@nestjs/swagger";

export class CreateFamilyMemberDto {
  @ApiProperty()
  studentId: number;
  
  @ApiProperty()
  parentId: number;

  @ApiProperty()
  familyId: number
}

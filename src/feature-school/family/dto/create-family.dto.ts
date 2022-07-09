import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";
import { CreateDto } from "core/base";

export class CreateFamilyDto extends CreateDto {
  @ApiProperty({
    description: 'Id of the Head of Family Member'
  })
  @IsNotEmpty()
  @Min(0)
  parentId: number
}

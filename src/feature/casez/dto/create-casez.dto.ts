import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsOptional, Length } from "class-validator";
import { CreateDto } from "core/base";

export class CreateCasezDto extends CreateDto{
  @ApiProperty()
  @IsOptional()
  @Length(3, 200)
  pdf: string;
}
export class UpdateCasezDto extends PartialType(CreateCasezDto) {}

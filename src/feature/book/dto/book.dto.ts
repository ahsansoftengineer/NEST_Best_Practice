import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Length } from "class-validator";
import { CreateDto } from "core/base";

export class CreateBookDto extends CreateDto {

  @ApiProperty()
  @IsOptional()
  @Length(3, 200)
  image: string;

  @ApiProperty()
  @IsOptional()
  @Length(3, 200)
  pdf: string;
}
export class UpdateBookDto extends PartialType(CreateBookDto) {}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
import { CreateDto } from "core/base";

export class CreateBookDto extends CreateDto {

  @ApiProperty()
  // @IsNotEmpty()
  @Length(3, 200)
  bookImage: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 200)
  bookPDF: string;
}

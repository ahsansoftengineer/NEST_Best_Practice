import { ApiProperty } from "@nestjs/swagger";
import { BaseDtoCreate } from "shared/dto/BaseDTOCreate";

export class CreateUserDto extends BaseDtoCreate {
  @ApiProperty({
    type: Number,
    default: 1,
    minimum: 1,
    maximum: 150,
    description: 'The age of a cat',
  })
  age: number;

  @ApiProperty()
  gender: string;
}

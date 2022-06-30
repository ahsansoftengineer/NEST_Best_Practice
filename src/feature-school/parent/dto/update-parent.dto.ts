import { PartialType } from "@nestjs/swagger";
import { CreatePersonDto } from 'feature-school/person/dto/create-person.dto';

export class UpdateParentDto extends PartialType(CreatePersonDto) {
    // @IsNotEmpty()
  // @IsNumber()
  // id: number
}

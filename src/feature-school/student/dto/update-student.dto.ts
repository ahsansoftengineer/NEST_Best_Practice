import { PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from 'feature-school/person/dto/create-person.dto';

export class UpdateStudentDto extends PartialType(CreatePersonDto) {
  // @IsNotEmpty()
  // @IsNumber()
  // id: number
}

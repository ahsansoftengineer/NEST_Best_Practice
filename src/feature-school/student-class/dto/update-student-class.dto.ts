import { PartialType } from '@nestjs/swagger';
import { CreateStudentClassDto } from './create-student-class.dto';

export class UpdateStudentClassDto extends PartialType(CreateStudentClassDto) {}

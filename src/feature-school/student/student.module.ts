import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PersonModule } from 'feature-school/person/person.module';
import { PersonService } from 'feature-school/person/person.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, PersonService],
  imports: [PersonModule]
})
export class StudentModule {}

import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PersonModule } from 'feature-school/person/person.module';
import { PersonService } from 'feature-school/person/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Student]),
    PersonModule
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

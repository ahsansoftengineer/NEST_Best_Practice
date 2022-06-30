import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { PersonModule } from 'feature-school/person/person.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Teacher]),
    PersonModule
  ],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}

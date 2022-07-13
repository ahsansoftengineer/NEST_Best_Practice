import { Module } from '@nestjs/common';
import { StudentClassService } from './student-class.service';
import { StudentClassController } from './student-class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentClass } from './entities/student-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentClass])],
  controllers: [StudentClassController],
  providers: [StudentClassService],
})
export class StudentClassModule {}

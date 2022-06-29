import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { PersonModule } from './person/person.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [TeacherModule, StudentModule, PersonModule, EmployeeModule],
})
export class FeatureModule {}

import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { StudentModule } from './student/student.module';
import { ParentModule } from './parent/parent.module';
import { TeacherModule } from './teacher/teacher.module';
import { ClassRoomModule } from './class-room/class-room.module';
import { SubjectModule } from './subject/subject.module';
import { AddressModule } from './address/address.module';
import { SchoolModule } from './school/school.module';
import { PrincipalModule } from './principal/principal.module';
import { FamilyModule } from './family/family.module';
import { HomeWorkModule } from './home-work/home-work.module';
import { ReportzModule } from './reportz/reportz.module';

@Module({
  imports: [
    PersonModule, 
    StudentModule, 
    ParentModule, 
    TeacherModule, 
    ClassRoomModule, 
    SubjectModule, 
    AddressModule, 
    SchoolModule, 
    PrincipalModule, 
    FamilyModule, 
    HomeWorkModule, 
    ReportzModule, 
  ]
})
export class FeatureSchoolModule { }

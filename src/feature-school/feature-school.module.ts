import { Module } from '@nestjs/common';
import {
  PersonModule,
  PrincipalModule,
  TeacherModule,
  ParentModule,
  StudentModule,
  ClassRoomModule,
  SubjectModule,
  AddressModule,
  SchoolModule,
  FamilyMemberModule,
  FamilyModule,
  HomeWorkModule,
  ReportzModule,
  StudentClassModule,
} from './index';

@Module({
  imports: [
    PersonModule,
    PrincipalModule,
    TeacherModule,
    ParentModule,
    StudentModule,
    ClassRoomModule,
    SubjectModule,
    AddressModule,
    SchoolModule,
    FamilyModule,
    HomeWorkModule,
    ReportzModule,
    StudentClassModule,
    FamilyMemberModule,
  ],
})
export class FeatureSchoolModule {}

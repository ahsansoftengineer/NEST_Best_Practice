import { Person } from "feature-school/person/entities/person.entity";
import { Student } from "feature-school/student/entities/student.entity";
import { BaseModel } from "core/BaseModel";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Address } from "feature-school/address/entities/address.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { Principal } from "feature-school/principal/entities/principal.entity";
import { School } from "feature-school/school/entities/school.entity";
import { Family } from "feature-school/family/entities/family.entity";
import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Subject } from "feature-school/subject/entities/subject.entity";

export const entities = [
  BaseModel,
  Address,
  Person,
  Student,
  Parent,
  Teacher,
  Principal,
  School,
  Family,
  ClassRoom,
  Subject
];

import { Person } from "feature-school/person/entities/person.entity";
import { Student } from "feature-school/student/entities/student.entity";
import { BaseModel } from "core/BaseModel";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Address } from "feature-school/address/entities/address.entity";

export const entities = [
  BaseModel,
  Address,
  Person,
  Student,
  Parent,
];

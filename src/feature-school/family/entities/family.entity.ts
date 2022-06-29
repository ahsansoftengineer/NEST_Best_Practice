import { Parent } from "feature-school/parent/entities/parent.entity";
import { Student } from "feature/student/entities/student.entity";
import { BaseModel } from "shared/BaseModel";

export class Family extends BaseModel{
  parent: Parent
}

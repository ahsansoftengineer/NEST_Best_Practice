import { BaseModel } from "core/BaseModel";
import { Student } from "feature-school/student/entities/student.entity";
import { ManyToMany } from "typeorm";

export class Address extends BaseModel{
  @ManyToMany(() => Student)
  // @JoinTable({
  //   name: 'person_address'
  // })
  student: Student[]
}

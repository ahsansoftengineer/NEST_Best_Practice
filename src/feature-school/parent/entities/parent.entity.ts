import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Student } from "feature-school/student/entities/student.entity";

@ChildEntity()
export class Parent extends Person{
  @ManyToMany(() => Student, (a) => a.id, {
    cascade: true,
  })
  @JoinTable({name: 'parent_student'})
  students: Student[]
}

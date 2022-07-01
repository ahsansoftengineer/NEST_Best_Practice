import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";

@ChildEntity()
export class Student extends Person {
  @ManyToMany(() => Parent, (a) => a.id, {
    cascade: true,
  })
  @JoinTable({name: 'parent_student'})
  parents: Parent[]
  
  @ManyToMany(() => Parent, (a) => a.id, {
    cascade: true,
  })
  @JoinTable({name: 'teacher_student'})
  teachers: Teacher[]
  // classes: ClassRoom
}

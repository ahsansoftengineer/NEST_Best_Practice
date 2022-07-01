import { Person } from "feature-school/person/entities/person.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { ChildEntity, OneToMany } from "typeorm";
@ChildEntity()
export class Principal extends Person{
  @OneToMany(() => Teacher, o => o.principal)
  teachers: Teacher[];
}
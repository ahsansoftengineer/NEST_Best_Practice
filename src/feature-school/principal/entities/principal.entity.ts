import { Person } from "feature-school/person/entities/person.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { ChildEntity, ManyToOne, OneToMany } from "typeorm";
@ChildEntity()
export class Principal extends Person{
  @OneToMany(() => Teacher, o => o.principal, {
    cascade: ['insert'],
    eager: true
  })
  teachers: Teacher[];
}
import { Person } from "feature-school/person/entities/person.entity";
import { School } from "feature-school/school/entities/school.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { ChildEntity, JoinColumn, OneToMany, OneToOne } from "typeorm";
@ChildEntity()
export class Principal extends Person{
  @OneToMany(() => Teacher, o => o.principal, {
    cascade: ['insert'],
    eager: true
  })
  teachers: Teacher[];

  @OneToOne(() => School, o => o.principal, {
    eager: true
  })
  @JoinColumn()
  school: School
}
import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Person } from "feature-school/person/entities/person.entity";
import { Principal } from "feature-school/principal/entities/principal.entity";
import { Student } from "feature-school/student/entities/student.entity";
import { ChildEntity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@ChildEntity()
export class Teacher extends Person {
  @ManyToMany(() => Student, (a) => a.id, {
    cascade: true,
  })
  @JoinTable({name: 'teacher_student'})
  students: Student[]

  @ManyToOne(() => Principal, (o) => o.teachers)
  // @JoinColumn({
  //   name: 'principalId'

  // })
  principal: Principal

  @OneToMany(() => ClassRoom, (a) => a.id)
  class: ClassRoom[]
}

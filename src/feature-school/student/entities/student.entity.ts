import { ChildEntity, Column, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Reportz } from "feature-school/reportz/entities/reportz.entity";
import { HomeWork } from "feature-school/home-work/entities/home-work.entity";
import { StudentClass } from "feature-school/student-class/entities/student-class.entity";

@ChildEntity()
export class Student extends Person {
  @ManyToMany(() => Parent, (a) => a.students)
  @JoinTable({name: 'parent_student'})
  parents: Parent[]
  
  @ManyToMany(() => Teacher, (a) => a.students)
  @JoinTable({name: 'teacher_student'})
  teachers: Teacher[]

  @OneToMany(() => StudentClass, (a) => a.student )
  studentClass: StudentClass[]

  @OneToMany(() => Reportz, (a) => a.student, {
    eager:true
  })
  reportzs: Reportz[]

  @OneToMany(() => HomeWork, (a) => a.student, {
    eager:true
  })
  homeWorks: HomeWork[]
}

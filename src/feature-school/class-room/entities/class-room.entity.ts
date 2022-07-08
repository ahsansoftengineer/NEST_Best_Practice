import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "core";
import { StudentClass } from "feature-school/student-class/entities/student-class.entity";
import { Subject } from "feature-school/subject/entities/subject.entity";
import { Teacher } from "feature-school/teacher/entities/teacher.entity";
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class ClassRoom extends BaseModel {
  @ApiProperty()
  @Column({ nullable: false, length: 40 })
  classCode: string

  @ApiProperty()
  @Column({ })
  dateFrom: Date

  @ApiProperty()
  @Column({ })
  dateTo: Date

  @ManyToOne(() => Teacher, (a) => a.class,{
    eager: true
  })
  teacher: Teacher

  @ApiProperty()
  @Column({nullable: true})
  teacherId: number;

  @ManyToOne(() => Subject, (a) => a.class, {
    eager: true,
  })
  subject: Subject

  @ApiProperty()
  @Column({nullable: true})
  subjectId: number;

  @ApiProperty()
  @OneToMany(() => StudentClass, (a) => a.classRoom,{
    eager: true
  })
  studentClass: StudentClass[]
}
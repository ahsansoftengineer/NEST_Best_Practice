import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/base"
import { Student } from "feature-school/student/entities/student.entity"
import { Column, Entity, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Reportz extends BaseModel {

  // title: reports_content
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  teacherComments: string
  
  @ManyToOne(() => Student, (a) => a.reportz )
  student: Student

  @Column({nullable: true})
  studentId: number;
}

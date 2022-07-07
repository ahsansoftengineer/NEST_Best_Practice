import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/BaseModel"
import { Student } from "feature-school/student/entities/student.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity()
export class Reportz extends BaseModel {

  // title: reports_content
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  teacherComments: string

  @OneToMany(() => Student, (a) => a.reportzs )
  student: Student

  @Column({nullable: true})
  studentId: number;
}

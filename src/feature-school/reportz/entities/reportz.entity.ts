import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/BaseModel"
import { Student } from "feature-school/student/entities/student.entity"
import { Column, Entity, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Reportz extends BaseModel {

  // title: reports_content
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  teacherComments: string
  
  @ApiProperty()
  @ManyToOne(() => Student, (a) => a.homeWorks )
  student: Student

  @ApiProperty()
  @Column({nullable: true})
  studentId: number;
}

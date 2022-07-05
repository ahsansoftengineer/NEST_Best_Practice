import { Column, Entity, ManyToOne, OneToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/BaseModel"
import { Student } from "feature-school/student/entities/student.entity"

@Entity()
export class HomeWork extends BaseModel {
  // title: for grade
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  homeWorkContent: string

  @ApiProperty()
  @OneToMany(() => Student, (a) => a.homeWorks )
  student: Student
}
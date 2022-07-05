import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/BaseModel"
import { Student } from "feature-school/student/entities/student.entity"
import { Column, OneToMany } from "typeorm"

export class HomeWork extends BaseModel {
  // title: for grade
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  homeWorkContent: string

  @OneToMany(() => Student, (a) => a.id )
  @Column()
  student: Student
}
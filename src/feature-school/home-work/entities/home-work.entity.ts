import { ApiProperty } from "@nestjs/swagger"
import { BaseModel } from "core/BaseModel"
import { Student } from "feature-school/student/entities/student.entity"
import { Column, OneToMany } from "typeorm"

export class HomeWork extends BaseModel {

  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  homeWorkContent: string

  @ApiProperty()
  @Column({ nullable: false, length: 20 })
  grade: string

  @OneToMany(() => Student, (a) => a.id )
  @Column()
  student: Student
}
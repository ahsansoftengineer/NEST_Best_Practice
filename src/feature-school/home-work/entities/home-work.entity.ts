import { Column, Entity, ManyToOne, OneToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { Student } from "feature-school/student/entities/student.entity"
import { BaseModel } from "core/base"

@Entity()
export class HomeWork extends BaseModel {
  // title: for grade
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  homeWorkContent: string

  @ApiProperty()
  @ManyToOne(() => Student, (a) => a.homeWorks )
  student: Student

  @ApiProperty()
  @Column({nullable: true})
  studentId: number;
}
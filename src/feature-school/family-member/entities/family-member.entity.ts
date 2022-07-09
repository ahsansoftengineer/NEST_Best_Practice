
import { BaseModel } from "core/base";
import { Family } from "feature-school/family/entities/family.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Student } from "feature-school/student/entities/student.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class FamilyMember extends BaseModel {
  // title = parent_or_family_member
  @ManyToOne(() => Student, (a) => a.familyMember, {
    eager: true,
  })
  student: Student

  @Column({nullable: true})
  studentId: number;

  @ManyToOne(() => Parent, (a) => a.familyMember, {
    eager: true,
  })
  parent: Parent

  @Column({nullable: true})
  parentId: number;

  @ManyToOne(() => Family, (a) => a.familyMember, {
    eager: true,
  })
  family: Family

  @Column({nullable: true})
  familyId: number


}

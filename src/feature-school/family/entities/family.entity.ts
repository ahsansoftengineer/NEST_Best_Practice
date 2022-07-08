import { BaseModel } from "core";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { ApiProperty } from "@nestjs/swagger";
import { FamilyMember } from "feature-school/family-member/entities/family-member.entity";

@Entity()
export class Family extends BaseModel{
  @OneToOne(() => Parent, (a) => a.headOfFamily, {eager: true})
  @JoinColumn({name: 'parentId'})
  parent: Parent

  @ApiProperty()
  @Column({nullable: true})
  parentId: number;

  @OneToMany(() => FamilyMember, (a) => a.family)
  familyMember: FamilyMember
  // id, parentId, title=Family Name
}

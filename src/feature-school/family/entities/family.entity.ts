import { BaseModel } from "core/BaseModel";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Family extends BaseModel{
  @OneToOne(() => Parent, (a) => a.headOfFamily, {eager: true})
  @JoinColumn({name: 'parentId'})
  parent: Parent

  @ApiProperty()
  @Column({nullable: true})
  parentId: number;
  // id, parentId, title=Family Name
}

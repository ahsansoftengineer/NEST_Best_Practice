import { BaseModel } from "core/BaseModel";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";

@Entity()
export class Family extends BaseModel{
  @OneToOne(() => Person, (a) => a.id)
  @JoinColumn()
  parent: Person

  @ManyToMany(() => Person, (a) => a.members)
  // @JoinTable({name: 'person_member'})
  members: Person
}

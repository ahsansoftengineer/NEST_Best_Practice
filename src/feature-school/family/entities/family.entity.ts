import { BaseModel } from "core/BaseModel";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";

@Entity()
export class Family extends BaseModel{
  @OneToOne(() => Person, (a) => a.id)
  @JoinColumn({name: 'headOfFamily'})
  headOfFamily: Person
}

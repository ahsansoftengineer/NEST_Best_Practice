import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";
import { Address } from "feature-school/address/entities/address.entity";

@ChildEntity()
export class Student extends Person {
  // parents: Parent[]
  // classes: ClassRoom
  @ManyToMany(() => Address)
  @JoinTable()
  address: Address[]
}

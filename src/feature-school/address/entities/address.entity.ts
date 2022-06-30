import { BaseModel } from "core/BaseModel";
import { Person } from "feature-school/person/entities/person.entity";
import { Student } from "feature-school/student/entities/student.entity";
import { Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Address extends BaseModel{
  // @ManyToMany(() => Person)
  // @JoinTable()
  // person: Person
}

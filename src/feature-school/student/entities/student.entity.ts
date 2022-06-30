import { ChildEntity } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";

@ChildEntity()
export class Student extends Person {
  // parents: Parent[]
  // classes: ClassRoom
}

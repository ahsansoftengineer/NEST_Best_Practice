import { ChildEntity } from "typeorm";
import { Person } from "feature-school/person/entities/person.entity";

@ChildEntity()
export class Parent extends Person{
  
}

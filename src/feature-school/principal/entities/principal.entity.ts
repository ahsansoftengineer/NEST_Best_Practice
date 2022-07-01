import { Person } from "feature-school/person/entities/person.entity";
import { ChildEntity } from "typeorm";
@ChildEntity()
export class Principal extends Person{}
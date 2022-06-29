import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Parent } from "feature-school/parent/entities/parent.entity";
import { Person } from "feature/person/entities/person.entity";

export class Student extends Person{
  image: string
  parents: Parent[]
  classes: ClassRoom
}

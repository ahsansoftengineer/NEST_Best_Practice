import { Column, ChildEntity } from "typeorm";
import { PrimeEntity } from "./prime.entity";

@ChildEntity()
export class Question extends PrimeEntity{
  @Column()
  question: string
}
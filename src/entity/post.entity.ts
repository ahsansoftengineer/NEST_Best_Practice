import { Column, Entity, ChildEntity } from "typeorm";
import { PrimeEntity } from "./prime.entity";

@ChildEntity()
export class Post extends PrimeEntity{
  @Column()
  post: string
}
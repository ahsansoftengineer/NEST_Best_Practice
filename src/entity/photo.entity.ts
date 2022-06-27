import { ChildEntity, Column, Entity } from "typeorm";
import { PrimeEntity } from "./prime.entity";

@ChildEntity()
export class Photo extends PrimeEntity{
  @Column({
    nullable: false,
    type:"int"
  })
  size: number
}
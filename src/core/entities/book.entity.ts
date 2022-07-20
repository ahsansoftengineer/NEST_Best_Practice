import { Column, Entity, Unique } from "typeorm";
import { BetaModel } from "./beta-model";
@Entity()
@Unique('book-title-unique', ['title'])
export class Book extends BetaModel{
  @Column({  length: 50 })
  title: string;

  @Column({ nullable: true, length: 200, default: '' })
  image: string;

  @Column({ nullable: true, length: 200, default: '' })
  pdf: string;
}

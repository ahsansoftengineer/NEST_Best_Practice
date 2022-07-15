import { BaseModel } from "core/base";
import { Column, Entity, Index, Unique } from "typeorm";
@Entity()
@Unique('book-title-unique', ['title'])
export class Book extends BaseModel{
  @Column({  length: 50 })
  title: string;

  @Column({ nullable: true, length: 200, default: '' })
  image: string;

  @Column({ nullable: true, length: 200, default: '' })
  pdf: string;
}

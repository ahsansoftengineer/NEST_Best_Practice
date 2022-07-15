import { BaseModel } from "core/base";
import { Column, Entity } from "typeorm";
@Entity()
export class Book extends BaseModel{

  @Column({ nullable: true, length: 200, default: '' })
  image: string;

  @Column({ nullable: true, length: 200, default: '' })
  pdf: string;

  

}

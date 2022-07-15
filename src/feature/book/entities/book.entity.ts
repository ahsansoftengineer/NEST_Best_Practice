import { BaseModel } from "core/base";
import { Column } from "typeorm";

export class Book extends BaseModel{

  @Column({ nullable: true, length: 200, default: '' })
  bookImage: string;

  @Column({ nullable: true, length: 200, default: '' })
  bookPDF: string;

}

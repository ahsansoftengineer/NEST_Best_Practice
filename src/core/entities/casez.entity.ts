import { BaseModel } from "core/base";
import { Column, Entity } from "typeorm";

@Entity()
export class Casez extends BaseModel {
  @Column({nullable: true, length: 200 })
  pdf: string;
}

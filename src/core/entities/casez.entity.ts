import { Column, Entity } from "typeorm";
import { BetaModel } from "./beta-model";

@Entity()
export class Casez extends BetaModel {
  @Column({nullable: true, length: 200 })
  pdf: string;
}

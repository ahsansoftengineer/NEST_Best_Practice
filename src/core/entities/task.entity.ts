import { STATUS_TASK } from "core/enums";
import { Column, Entity } from "typeorm";
import { BetaModel } from "./beta-model";

@Entity()
export class Task extends BetaModel {

  @Column({
    type: 'enum',
    enum: STATUS_TASK,
    default:  STATUS_TASK.PENDING,
    nullable: true
  })
  status: STATUS_TASK;

}

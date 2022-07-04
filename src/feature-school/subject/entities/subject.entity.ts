import { BaseModel } from "core/BaseModel";
import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Subject extends BaseModel{
  @ManyToOne(() => ClassRoom, (a) => a.id)
  class: ClassRoom[] 
}

import { BaseModel } from "core";
import { ClassRoom } from "feature-school/class-room/entities/class-room.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Subject extends BaseModel{
  @ManyToOne(() => ClassRoom, (a) => a.id)
  class: ClassRoom[] 
}

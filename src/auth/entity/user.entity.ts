import { Address } from "feature-school/address/entities/address.entity";
import { BaseModel } from "core/BaseModel";
import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Family } from "feature-school/family/entities/family.entity";
import { PERSON_TYPE } from "feature-school/person/entities/person.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: PERSON_TYPE,
    nullable: true,
  })
  type: PERSON_TYPE

  @Column({ nullable: true, length: 250 })
  password: string

  @Column({ 
    length: 40, 
    unique: true 
  })
  username: string

}

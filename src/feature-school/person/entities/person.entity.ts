import { Address } from "feature-school/address/entities/address.entity";
import { BaseModel } from "shared/BaseModel";
import { Column, Entity, Index, JoinTable, ManyToMany, TableInheritance } from "typeorm";

export enum GENDER{
  MALE = 'male',
  FEMALE = 'female'
}
export enum USERROLE{
  ADMIN = 'Admin',
  PRINCIPAL = 'Principal',
  TEACHER = 'Teacher',
  PARENT = 'Parent',
  STUDENT = 'Student'
}
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
@Index(["title", "lastName"], {unique: true, })
@Index(["title", "middleName", "lastName"], { unique: true })
export class Person extends BaseModel{
  @Column({ nullable: false, length: 20 })
  middleName: string

  @Column({ nullable: false, length: 20 })
  lastName: string

  // @Index("username-idx")
  @Column({ length: 20, unique: true })
  username: string

  @Column({ length: 20 })
  password: string

  @Column({ 
    nullable: false, 
    default: 'male', 
    type: 'enum', 
    enum: GENDER 
  })
  gender: GENDER;

  @Column("date")
  dateOfBirth: string

  @Column({
    type: "enum",
    enum: USERROLE,
    default: USERROLE.STUDENT,
  })
  role: USERROLE

  // @ManyToMany(() => Address)
  // @JoinTable()
  // address: Address[]
}

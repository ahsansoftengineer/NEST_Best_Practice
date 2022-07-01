import { Address } from "feature-school/address/entities/address.entity";
import { BaseModel } from "core/BaseModel";
import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, TableInheritance } from "typeorm";
import { Family } from "feature-school/family/entities/family.entity";

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
  @Column({ nullable: false, length: 40 })
  middleName: string

  @Column({ nullable: false, length: 40 })
  lastName: string

  @Column({ length: 40, unique: true })
  email: string
  // @Index("username-idx")
  @Column({ length: 40, unique: true })
  username: string

  @Column({ length: 40 })
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

  @Column({
    default: 'no image set'
  })
  image: string
  
  @ManyToMany(() => Address, (a) => a.id, {
    cascade: true,
    eager: true,
  })
  @JoinTable({name: 'person_address'})
  address: Address[]

  @OneToOne(() => Family, (a) => a.headOfFamily, {
    cascade: true,
    eager: true
  })
  family: Family
}

import { Address } from 'feature-school/address/entities/address.entity';

import { BaseModel } from 'core/base';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  TableInheritance,
} from 'typeorm';
import { Family } from 'feature-school/family/entities/family.entity';

export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
}
export enum PERSON_TYPE {
  ADMIN = 'Admin',
  PRINCIPAL = 'Principal',
  TEACHER = 'Teacher',
  PARENT = 'Parent',
  STUDENT = 'Student',
}
@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
// @Index(["title", "lastName"], {unique: true, })
// @Index(["title", "middleName", "lastName"], { unique: true })
export class Person extends BaseModel {
  @Column({
    type: 'enum',
    enum: PERSON_TYPE,
    nullable: true,
  })
  type: PERSON_TYPE;

  @Column({ nullable: true, length: 40 })
  middleName: string;

  @Column({ nullable: false, length: 40 })
  lastName: string;

  @Column({
    length: 40,
    // unique: true
  })
  email: string;
  // @Index("username-idx")
  @Column({
    length: 40,
    // unique: true
  })
  username: string;

  @Column({ length: 40 })
  password: string;

  @Column({
    nullable: false,
    default: 'male',
    type: 'enum',
    enum: GENDER,
  })
  gender: GENDER;

  @Column('date')
  dateOfBirth: string;

  @Column({
    default: 'no image set',
    length: 100,
  })
  image: string;

  @ManyToMany(() => Address, (a) => a.id, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @JoinTable({ name: 'person_address' })
  address: Address[];

  // @OneToOne(() => Family, (a) => a.parent, {
  //   cascade: true,
  //   eager: true
  // })
  // familyHead: Family

  // @ManyToMany(() => Family, (a) => a.members)
  // @JoinTable({name: 'person_member'})
  // members: Family[]
}

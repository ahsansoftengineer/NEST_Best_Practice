import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
}
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, default: 'male', type: 'enum', enum: GENDER })
  gender: string;

  @Column({ nullable: true, default: '' })
  email: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn({ type: 'bigint'})
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false, default: 'male', type: "enum", enum: GENDER })
  gender: string

  @Column({ nullable: true, default: '' })
  email: string
}


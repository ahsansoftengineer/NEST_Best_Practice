import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseModel extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, length: 20 })
  title: string

  @Column({ length: 150 })
  desc: string
}
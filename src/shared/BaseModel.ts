import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, length: 20 })
  title: string

  @Column({ length: 150 })
  desc: string
}
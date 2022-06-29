import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseModel{
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number
  @Column({ nullable: false })
  title: string
  desc: string
}
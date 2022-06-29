import { Column, PrimaryGeneratedColumn } from "typeorm";


export class BaseModel{
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number
  @Column({ nullable: false, length: 20 })
  title: string
  desc: string
}
import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseModel extends BaseEntity{
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ nullable: false, length: 20 })
  title: string

  @ApiProperty()
  @Column({ length: 150, default: '' })
  desc: string
}
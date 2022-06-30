import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseModel {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ nullable: false, length: 20 })
  title: string

  @ApiProperty()
  @Column({ length: 150 })
  desc: string
}
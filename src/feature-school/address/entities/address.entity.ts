import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address{
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ nullable: false, length: 120 })
  title: string

  @ApiProperty()
  @Column({ length: 150, default: '' })
  desc: string

}

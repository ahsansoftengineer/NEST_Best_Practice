import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CompositUser {
  // @PrimaryGeneratedColumn()
  // id: number

  @PrimaryColumn()
  firstName: string

  @PrimaryColumn()
  lastName: string
}
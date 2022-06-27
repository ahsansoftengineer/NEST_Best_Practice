import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @Column()
  address: string

} 
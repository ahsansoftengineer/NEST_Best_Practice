import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column: {type:'varchar', name: 'type'}})
export class PrimeEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  name: string

  @Column({
    nullable: false
  })
  des: string
}
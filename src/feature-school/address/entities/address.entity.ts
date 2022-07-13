import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Person } from 'feature-school/person/entities/person.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
// @Entity({ database: "secondDB" })
export class Address {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false, length: 120 })
  title: string;

  @ApiProperty()
  @IsOptional()
  @Column({ length: 150, default: '' })
  desc: string;

  // @ManyToMany(() => Person, (a) => a.address)
  // @JoinTable({name: 'person_address'})
  // person: Person[]
}

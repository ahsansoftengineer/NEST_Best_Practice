import { Person } from 'feature/person/entities/person.entity';
import { ChildEntity, Column, Entity } from 'typeorm';

export enum EDU {
  MATRIC = 'Matric',
  INTER = 'Inter',
  GRADUATE = 'Graduate',
  MASTER = 'Master',
}

@ChildEntity()
export class Teacher extends Person {
  @Column({ nullable: false, type: 'enum', enum: EDU })
  education: EDU;
}

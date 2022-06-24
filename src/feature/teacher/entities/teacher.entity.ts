import { Person } from 'feature/person/entities/person.entity';
import { Column, Entity } from 'typeorm';

export enum EDU {
  MATRIC = 'Matric',
  INTER = 'Inter',
  GRADUATE = 'Graduate',
  MASTER = 'Master',
}

@Entity()
export class Teacher extends Person {
  @Column({ nullable: false, type: 'enum', enum: EDU })
  education: EDU;
}

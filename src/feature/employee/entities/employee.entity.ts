import { Person } from 'feature/person/entities/person.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Employee extends Person {
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}

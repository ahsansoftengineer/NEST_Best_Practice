import { Person } from 'feature/person/entities/person.entity';
import { ChildEntity, Column, Entity } from 'typeorm';

@ChildEntity()
export class Employee extends Person {
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}

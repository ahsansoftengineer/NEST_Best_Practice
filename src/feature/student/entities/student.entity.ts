import { ChildEntity } from 'typeorm';
import { Person } from 'feature/person/entities/person.entity';
import { Column, Entity } from 'typeorm';

@ChildEntity()
export class Student extends Person {
  @Column({
    nullable: false,
    default: '',
  })
  class: string;
}

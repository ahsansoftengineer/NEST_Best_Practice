import { ApiProperty } from '@nestjs/swagger';
import { ClassRoom } from 'feature-school/class-room/entities/class-room.entity';
import { Person } from 'feature-school/person/entities/person.entity';
import { Principal } from 'feature-school/principal/entities/principal.entity';
import { Student } from 'feature-school/student/entities/student.entity';
import {
  ChildEntity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@ChildEntity()
export class Teacher extends Person {
  @ManyToOne(() => Principal, (o) => o.teachers)
  principal: Principal;

  @ApiProperty()
  @Column({ nullable: true })
  principalId: number;

  @OneToMany(() => ClassRoom, (a) => a.id)
  class: ClassRoom[];

  // Teacher Relation Ship with Student Via Class
}

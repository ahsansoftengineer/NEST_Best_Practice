import { ApiProperty } from '@nestjs/swagger';
import { ClassRoom } from 'feature-school/class-room/entities/class-room.entity';
import { Student } from 'feature-school/student/entities/student.entity';
import { PrimaryColumn, Column, ManyToOne, Entity } from 'typeorm';

@Entity()
export class StudentClass {
  @ApiProperty()
  @PrimaryColumn({})
  dateFrom: Date;

  @ApiProperty()
  @Column({})
  dateTo: Date;

  @ManyToOne(() => ClassRoom, (a) => a.studentClass)
  classRoom: ClassRoom;

  @ApiProperty()
  @Column({ nullable: true })
  classRoomId: number;

  @ManyToOne(() => Student, (a) => a.studentClass, {
    eager: true,
  })
  student: Student;

  @ApiProperty()
  @Column({ nullable: true })
  studentId: number;
}

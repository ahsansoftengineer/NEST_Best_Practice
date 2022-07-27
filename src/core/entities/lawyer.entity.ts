import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlphaModel } from './alpha-model';
import {
  User,
  Court,
  Specialization,
  LawyerTeam,
  LawyerClient,
  Task,
} from './index';

@Entity()
export class Lawyer extends AlphaModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => User, (x) => x.lawyer, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyer' })
  user?: User;

  userId?: number;

  @ManyToOne(() => Specialization, (e) => e.lawyers, { eager: true })
  @JoinColumn({
    foreignKeyConstraintName: 'fk_specialization_user',
  })
  specialization?: Specialization;

  @JoinColumn({
    foreignKeyConstraintName: 'fk_specialization_user',
  })
  specializationId?: number;

  @ManyToMany(() => Court, (c) => c.lawyer, {
    eager: true,
  })
  @JoinTable({ name: 'court_lawyer' })
  court?: Court[];

  courtIds?: number[];

  @OneToMany(() => LawyerTeam, (x) => x.lawyer)
  lawyerTeam?: LawyerTeam[];

  @OneToMany(() => LawyerClient, (x) => x.lawyer)
  lawyerClient?: LawyerClient[];

  @OneToMany(() => Task, (x) => x.lawyer)
  task?: Task[];
}

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import {
  User,
  Court,
  Specialization,
  LawyerTeam,
  LawyerClient,
  Task,
  Appoinment,
  AlphaModel,
} from './index';

@Entity()
export class Lawyer extends AlphaModel {
  @ManyToOne(() => User, (x) => x.lawyer, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyer' })
  user?: User;

  @Column()
  userId?: number;

  @ManyToOne(() => Specialization, (e) => e.lawyers, { eager: true })
  @JoinColumn({
    foreignKeyConstraintName: 'fk_specialization_user',
  })
  specialization?: Specialization;

  @Column()
  specializationId?: number;

  @ManyToMany(() => Court, (c) => c.lawyer, {
    eager: true,
  })
  @JoinTable({
    name: 'court_lawyer',
    joinColumn: { foreignKeyConstraintName: 'fk_lawyer_court' },
  })
  court?: Court[];

  // courtIds?: number[]; // It cannot be used in any case

  @OneToMany(() => LawyerTeam, (x) => x.lawyer)
  lawyerTeam?: LawyerTeam[];

  @OneToMany(() => LawyerClient, (x) => x.lawyer)
  lawyerClient?: LawyerClient[];

  @OneToMany(() => Task, (x) => x.lawyer)
  task?: Task[];

  @OneToOne(() => Appoinment, (x) => x.lawyer)
  appointment?: Appoinment;
}

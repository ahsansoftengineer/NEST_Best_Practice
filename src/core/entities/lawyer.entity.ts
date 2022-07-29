import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationId,
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

  @ManyToMany(() => Court, {
    eager: true,
    // cascade: true// if it work with that then remove it
  })
  @JoinTable({
    name: 'court_lawyer',
    joinColumn: { 
      name: 'lawyerId',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_lawyer_court',
    },
    inverseJoinColumn: { 
      name: 'courtId',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_court_lawyer',
    },
  })
  courts?: Court[];

  // @RelationId((d: Lawyer) => d.courts)
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

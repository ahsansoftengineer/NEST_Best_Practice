import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlphaModel } from './alpha-model';
import { Lawyer } from './lawyer.entity';
import { User } from './user.entity';

@Entity()
export class LawyerTeam extends AlphaModel {
  @Column({ nullable: true, length: 250, default: '' })
  responsibility: string

  @Column({ nullable: true, length: 250, default: '' })
  timing: string

  @Column({ nullable: true, length: 250, type: 'number'  })
  amount: number

  @OneToOne(() => User, (x) => x.lawyerTeam, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerTeam' })
  user?: User;

  userId?: number;

  @ManyToOne(() => User, { eager: true, cascade: true })
  lawyer?: Lawyer;

  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyer_team' })
  lawyerId: number;
}

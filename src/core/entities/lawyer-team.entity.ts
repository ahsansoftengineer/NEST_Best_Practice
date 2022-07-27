import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AlphaModel } from './alpha-model';
import { Lawyer, User, Task } from './index';

@Entity()
export class LawyerTeam extends AlphaModel {
  @Column({ nullable: true, length: 250, default: '' })
  responsibility: string;

  @Column({ nullable: true, length: 250, default: '' })
  timing: string;

  @Column({ nullable: true, length: 250, type: 'number' })
  amount: number;

  @OneToOne(() => User, (x) => x.lawyerTeam, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerTeam' })
  user?: User;

  @Column({ nullable: true })
  userId?: number;

  @ManyToOne(() => Lawyer, (x) => x.lawyerTeam, { eager: true, cascade: true })
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyerTeam' })
  lawyer?: Lawyer;

  @Column({ nullable: true })
  lawyerId?: number;

  @OneToMany(() => Task, (x) => x.lawyerTeam)
  task?: Task[];
}

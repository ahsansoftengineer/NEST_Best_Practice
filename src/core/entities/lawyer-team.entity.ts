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
  @Column({ length: 250 })
  responsibility: string;

  @Column({ nullable: true, default: '' })
  timing: string;

  @Column({ nullable: true })
  amount: number;

  @OneToOne(() => User, (x) => x.lawyerTeam, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerTeam' })
  user?: User;

  @Column({ nullable: true })
  userId?: number;

  @ManyToOne(() => Lawyer, (x) => x.lawyerTeam)
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyerTeam' })
  lawyer?: Lawyer;

  @Column({ nullable: true })
  lawyerId?: number;

  @OneToMany(() => Task, (x) => x.lawyerTeam)
  task?: Task[];
}

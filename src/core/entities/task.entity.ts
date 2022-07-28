import { STATUS_TASK } from 'core/enums';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';
import { User } from './user.entity';

@Entity()
export class Task extends BetaModel {
  @Column({
    type: 'enum',
    enum: STATUS_TASK,
    default: STATUS_TASK.PENDING,
    nullable: true,
  })
  status: STATUS_TASK;

  @ManyToOne(() => Lawyer, { eager: true, cascade: true })
  lawyer?: Lawyer;

  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyerTeam' })
  lawyerId: number;
}

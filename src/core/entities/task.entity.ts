import { STATUS_TASK } from 'core/enums';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BetaModel } from './beta-model';
import { LawyerTeam } from './lawyer-team.entity';
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

  @ManyToOne(() => Lawyer, x => x.task)
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyer_task' })
  lawyer?: Lawyer;

  @Column({ nullable: true,  })
  lawyerId?: number;

  @ManyToOne(() => LawyerTeam, x => x.task)
  @JoinColumn({ name: 'lawyerTeamId', foreignKeyConstraintName: 'fk_lawyerTeam_task' })
  lawyerTeam?: Lawyer;

  @Column({ nullable: true,  })
  lawyerTeamId?: number;
}

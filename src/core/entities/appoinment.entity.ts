import { STATUS_APPOINT } from 'core/enums';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';
import { User } from './user.entity';

@Entity()
export class Appoinment extends BetaModel {
  @ManyToOne(() => User, (x) => x.appointment, { cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_appointment' })
  user?: User;

  @Column({})
  userId?: number;

  @ManyToOne(() => Lawyer, (x) => x.appointment)
  @JoinColumn({ foreignKeyConstraintName: 'fk_lawyer_appointment' })
  lawyer?: Lawyer;

  @Column()
  lawyerId?: number;

  @Column({
    type: 'enum',
    enum: STATUS_APPOINT,
    default: STATUS_APPOINT.PENDING,
    nullable: true,
  })
  status: STATUS_APPOINT;

  @Column()
  date: string;

  @Column()
  time: string;
  // will be reterived from lawyer
  // specilizationId,
  // cityId
}

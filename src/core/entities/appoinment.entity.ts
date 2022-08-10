import { STATUS_APPOINT } from 'core/enums';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';
import { User } from './user.entity';

@Entity()
export class Appoinment {
  @Column()
  title: string;

  @Column({length:100})
  desc: string;
  
  @ManyToOne(() => User, (x) => x.appointment, { cascade: true })
  @JoinColumn({name: 'id', foreignKeyConstraintName: 'fk_user_appointment' })
  user?: User;

  @PrimaryColumn()
  id?: number;

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

  @Column()
  feedback?: string;

}

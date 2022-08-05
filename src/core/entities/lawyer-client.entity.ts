import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { Lawyer, User } from './index';

@Entity()
export class LawyerClient {
  @Column({ length: 100, default: '' })
  type: string;

  @Column({ length: 100, default: '' })
  suite: string;

  @Column({length: 100})
  caseNo: string;

  @ManyToOne(() => Lawyer, (x) => x.lawyerClient, {
    // eager: true,
    // cascade: true,
  })
  @JoinColumn({ foreignKeyConstraintName: 'fk_lawyer_lawyerClient' })
  lawyer?: Lawyer;

  @Column()
  lawyerId?: number;

  @OneToOne(() => User, (x) => x.lawyerClient, { eager: true, cascade: true })
  @JoinColumn({name: 'id', foreignKeyConstraintName: 'fk_user_lawyerClient' })
  user?: User;

  @PrimaryColumn()
  id?: number;
}

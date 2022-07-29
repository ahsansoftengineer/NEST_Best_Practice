import { Column, Entity, JoinColumn, ManyToOne, OneToOne, RelationId } from 'typeorm';
import { AlphaModel } from './alpha-model';
import { Lawyer, User } from './index';

@Entity()
export class LawyerClient extends AlphaModel {
  @Column({ length: 100, default: '' })
  type: string;

  @Column({ length: 100, default: '' })
  suite: string;

  @ManyToOne(() => Lawyer, (x) => x.lawyerClient, {
    // eager: true,
    // cascade: true,
  })
  @JoinColumn({ foreignKeyConstraintName: 'fk_lawyer_lawyerClient' })
  lawyer?: Lawyer;

  @Column()
  lawyerId?: number;

  @OneToOne(() => User, (x) => x.lawyerClient, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerClient' })
  user?: User;

  @RelationId((d: LawyerClient) => d.user)
  userId?: number;
}

import { Column, JoinColumn, ManyToOne } from 'typeorm';
import { AlphaModel } from './alpha-model';
import { User } from './user.entity';

export class AlphaBModel extends AlphaModel {
  @ManyToOne(() => User, (x) => x.lawyer, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyer' })
  user?: User;

  @Column()
  userId?: number;
}

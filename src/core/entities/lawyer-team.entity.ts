import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  RelationId,
} from 'typeorm';
import { Lawyer, User, Task } from './index';

@Entity()
export class LawyerTeam {
  @Column({ length: 250 })
  responsibility: string;

  @Column({ nullable: true, default: '' })
  timing: string;

  @Column({ nullable: true })
  amount: string;

  @OneToOne(() => User, (x) => x.lawyerTeam, { eager: true, cascade: true })
  @JoinColumn({name:'id', foreignKeyConstraintName: 'fk_user_lawyerTeam' })
  user?: User; 

  @PrimaryColumn()
  id?: number;

  @ManyToOne(() => Lawyer, (x) => x.lawyerTeam)
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyerTeam' })
  lawyer?: Lawyer;

  // @RelationId((d: LawyerTeam) => d.lawyer)
  @Column()
  lawyerId?: number;

  @OneToMany(() => Task, (x) => x.lawyerTeam)
  task?: Task[];
}

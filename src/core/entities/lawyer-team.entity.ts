import { COURT, SPECIALIZATION } from "core/enums";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import { Lawyer } from "./lawyer.entity";
import { User } from "./user.entity";


@Entity()
export class LawyerTeam {
  @OneToOne(() => User, { eager: true, cascade: true })
  user: User;
  
  @JoinColumn({ name: 'userId', foreignKeyConstraintName: 'fk_user_lawyer' })
  userId: number;

  @ManyToOne(() => User, { eager: true, cascade: true })
  lawyer: Lawyer;
  
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyer_team' })
  lawyerId: number;


}
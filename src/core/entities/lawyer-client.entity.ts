import { Column, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AlphaModel } from "./alpha-model";
import { Lawyer, User,  } from "./index";

export class LawyerClient extends AlphaModel{

  @Column({ length: 100,  default: '' })
  type:string

  @Column({ length: 100, default: '' })
  suite:string

  @ManyToOne(() => User, { eager: true, cascade: true })
  lawyer?: Lawyer;

  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyer_lawyerClient' })
  lawyerId: number;

  @OneToOne(() => User, (x) => x.lawyerClient, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerClient' })
  user?: User;

  userId?: number;

}

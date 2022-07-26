import { JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";

export class LawyerClient {

  @OneToOne(() => User, (x) => x.lawyerClient, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyerClient' })
  user?: User;

  userId?: number;

}

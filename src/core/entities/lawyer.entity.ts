import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne} from "typeorm";
import { Court } from "./court.entity";
import { Specialization } from "./specialization.entity";
import { User } from "./user.entity";


@Entity()
export class Lawyer {
  @ManyToOne(() => Specialization, e => e.lawyers)
  specialization: Specialization;

  @ManyToMany(() => Court, c => c.lawyer, {
    eager: true,
  })
  @JoinTable({ name: 'court_lawyer' })
  court: Court[];


  @OneToOne(() => User, { eager: true, cascade: true })
  user: User;
  
  @JoinColumn({ name: 'userId', foreignKeyConstraintName: 'fk_user_lawyer' })
  userId: number;
}


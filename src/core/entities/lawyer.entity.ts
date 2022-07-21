import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Court } from "./court.entity";
import { Specialization } from "./specialization.entity";
import { User } from "./user.entity";


@Entity()
export class Lawyer {
  
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => Specialization, e => e.lawyers)
  specialization: Specialization;

  @JoinColumn({ foreignKeyConstraintName: 'fk_specialization_user', referencedColumnName:'id' })
  specializationId: number;

  @ManyToMany(() => Court, c => c.lawyer, {
    eager: true,
  })
  @JoinTable({ name: 'court_lawyer' })
  court: Court[];


  @OneToOne(() => User, x => x.lawyer, { eager: true, cascade: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyer' })
  user: User;
  
  @JoinColumn({ foreignKeyConstraintName: 'fk_user_lawyer' })
  userId: number;
}


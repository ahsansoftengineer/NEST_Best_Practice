import { COURT, SPECIALIZATION } from "core/enums";
import { Column, Entity, JoinColumn, OneToOne} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Lawyer {
  @Column()
  city: string;

  @Column({
    type: 'enum',
    enum: SPECIALIZATION,
  })
  specialization: SPECIALIZATION;

  @Column({
    type: 'enum',
    enum: COURT,
  })
  court: COURT;

  @Column()
  address: string;

  @Column({nullable: true, length: 200 })
  image: string;

  @OneToOne(() => User, { eager: true, cascade: true })
  user: User;
  
  @JoinColumn({ name: 'userId', foreignKeyConstraintName: 'fk_user_lawyer' })
  userId: number;
}


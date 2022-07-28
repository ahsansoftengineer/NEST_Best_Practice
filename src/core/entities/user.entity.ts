import { GENDER, ROLE, STATUS } from 'core/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  Unique,
} from 'typeorm';
import { AlphaModel } from './alpha-model';
import { Appoinment } from './appoinment.entity';
import { City } from './city.entity';
import { LawyerClient } from './lawyer-client.entity';
import { LawyerTeam } from './lawyer-team.entity';
import { Lawyer } from './lawyer.entity';

@Entity()
@Unique('email', ['email'])
export class User extends AlphaModel {
  @Column({ length: 60 })
  name: string;
  // @Index("email-idx")
  @Column({ length: 40 })
  email: string;

  @Column({
    type: 'enum',
    enum: STATUS,
    default: STATUS.PENDING,
    nullable: true,
  })
  status: STATUS;

  @Column({
    type: 'enum',
    enum: ROLE,
    nullable: true,
    default: ROLE.LAWYER,
  })
  role: ROLE;

  @Column({ length: 1000 })
  password: string;

  @Column({ length: 20 })
  mobile: string;

  @Column({
    default: 'male',
    type: 'enum',
    enum: GENDER,
  })
  gender: GENDER;

  @Column()
  address: string;

  @Column({ nullable: true, length: 200 })
  image?: string;

  @Column({ length: 1000, nullable: true })
  hashedRt?: string;

  @ManyToOne(() => City, (e) => e.user, { eager: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_city_user' })
  city?: City;

  cityId: number;

  @OneToOne(() => Lawyer, (x) => x.user)
  lawyer?: Lawyer;

  @OneToOne(() => Appoinment, (x) => x.user)
  appointment?: Appoinment;

  @OneToOne(() => LawyerClient, (x) => x.user)
  lawyerClient?: LawyerClient;

  @OneToOne(() => LawyerTeam, (x) => x.user)
  lawyerTeam?: LawyerTeam;
}

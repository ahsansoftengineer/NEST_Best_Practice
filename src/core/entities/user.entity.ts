import { GENDER, ROLE, STATUS } from 'core/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  RelationId,
  Unique,
} from 'typeorm';
import { AlphaModel } from './alpha-model';
import { Appoinment } from './appoinment.entity';
import { City } from './city.entity';
import { LawyerClient } from './lawyer-client.entity';
import { LawyerTeam } from './lawyer-team.entity';
import { Lawyer } from './lawyer.entity';

@Entity({
  // orderBy: {
  //   name: "ASC",
  //   id: "DESC",
  // },
  // synchronize: false,
})
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

  @Column({ length: 1000, default: '' })
  password: string;

  @Column({ length: 20 })
  mobile: string;

  @Column({
    default: GENDER.NONE,
    type: 'enum',
    enum: GENDER,
  })
  gender: GENDER; 

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true, default: 'No Image provided', length: 200 })
  image?: string; 

  @Column({ length: 1000, nullable: true })
  hashedRt?: string;

  @ManyToOne(() => City, (e) => e.user, { eager: true, nullable: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_city_user' })
  city?: City;

  // @RelationId((x: User) => x.city)
  @Column({nullable:true})
  cityId?: number;

  @OneToOne(() => Lawyer, (x) => x.user)
  lawyer?: Lawyer;

  @OneToOne(() => Appoinment, (x) => x.user)
  appointment?: Appoinment;

  @OneToOne(() => LawyerClient, (x) => x.user)
  lawyerClient?: LawyerClient;

  @OneToOne(() => LawyerTeam, (x) => x.user)
  lawyerTeam?: LawyerTeam;
}

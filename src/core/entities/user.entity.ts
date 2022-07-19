import { DefaultModel } from "core/base";
import { COURT, GENDER, ROLE, SPECIALIZATION, STATUS } from "core/enums";
import { Column, Entity, Unique } from "typeorm";


@Entity()
@Unique('email', ['email'] )
export class User extends DefaultModel{
  @Column({length: 60})
  name: string;
  // @Index("email-idx")
  @Column({length: 40})
  email: string;

  @Column({
    type: 'enum',
    enum: STATUS,
    default:  STATUS.PENDING,
    nullable: true
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

  @Column({length: 20})
  mobile: string;

  @Column({
    default: 'male',
    type: 'enum',
    enum: GENDER,
  })
  gender: GENDER;

  @Column({ length: 1000, nullable: true })
  hashedRt: string
}


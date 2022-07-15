import { ROLE } from "core/enums";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

export enum SPECIALIZATION {
  CIVIL = 'Civil',
  CRIMINAL = 'Criminal',
  FAMILY = 'Family',
}

export enum COURT {
  LOWER = 'Lower Court',
  HIGH = 'High Court',
  SUPREME = 'Supreme Court',
}
@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ROLE,
    nullable: true,
  })
  role: ROLE;

  // @Index("email-idx")
  @Column({
    length: 40,
    unique: true
  })
  email: string;

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
  court: string;

  @Column()
  address: string;

  @Column({nullable: true })
  image: string;

  @Column({ length: 1000, nullable: true })
  hashedRt: string

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}


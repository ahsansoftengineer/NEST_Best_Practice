import { ROLE } from "core/enums";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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


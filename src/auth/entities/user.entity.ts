import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum ROLE {
  ADMIN = 'Admin',
  LAYER = 'Layer',
  CLIENT = 'Client',
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

  // @Index("username-idx")
  @Column({
    length: 40,
    unique: true
  })
  username: string;

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


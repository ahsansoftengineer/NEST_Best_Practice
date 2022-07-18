import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseModel extends BaseEntity {
  // For MongoDB
  // @PrimaryGeneratedColumn("uuid")
  // id: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ nullable: true, length: 250, default: '' })
  desc: string;

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

  // @DeleteDateColumn({
  //   type: "timestamp",
  //   default: () => "CURRENT_TIMESTAMP(6)",
  //   onUpdate: "CURRENT_TIMESTAMP(6)"
  // })
  // public deletedAt: Date;

  // @VersionColumn()
  // public version: Date;
}

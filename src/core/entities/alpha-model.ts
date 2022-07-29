import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// @Check(`"age" > 18`)
export class AlphaModel {
  // For MongoDB
  // @PrimaryGeneratedColumn("uuid")
  // id: string;

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, length: 250, default: '' })
  desc?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    select: false
  })
  public createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    select: false,

  })
  public updatedAt?: Date;

  // @DeleteDateColumn({
  //   type: "timestamp",
  //   default: () => "CURRENT_TIMESTAMP(6)",
  //   onUpdate: "CURRENT_TIMESTAMP(6)"
  // })
  // public deletedAt: Date;

  // @VersionColumn()
  // public version: Date;

  // @AfterLoad()
  // updateCounters() {
  //     if (this.likesCount === undefined) this.likesCount = 0
  // }
}

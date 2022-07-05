import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseModel extends BaseEntity{
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ nullable: false, length: 40 })
  title: string

  @ApiProperty()
  @Column({ length: 150 })
  desc: string

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date;
  
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updatedAt: Date;
}
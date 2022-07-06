import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export class BaseModel extends BaseEntity{
  // For MongoDB
  // @PrimaryGeneratedColumn("uuid")
  // id: string;

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 40 })
  title: string;

  @ApiProperty()
  @Column({ nullable: true, length: 150, default: '' })
  desc: string

  @CreateDateColumn({ 
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP(6)" 
  })
  public createdAt: Date;
  
  @UpdateDateColumn({
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP(6)", 
    onUpdate: "CURRENT_TIMESTAMP(6)" })
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
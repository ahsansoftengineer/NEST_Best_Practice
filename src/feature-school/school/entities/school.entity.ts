import { Principal } from "feature-school/principal/entities/principal.entity";
import { BaseModel } from "core/BaseModel";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Address } from "feature-school/address/entities/address.entity";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class School extends BaseModel {
  @OneToOne(() => Principal, {eager: true})
  @JoinColumn()
  principal: Principal

  @ApiProperty()
  @Column({ nullable: true })
  principalId: number;
  
  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn({name: 'addressId'})
  address: Address;

  @ApiProperty()
  @Column({ nullable: true })
  addressId: number;
}
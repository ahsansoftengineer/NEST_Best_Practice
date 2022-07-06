import { Principal } from "feature-school/principal/entities/principal.entity";
import { BaseModel } from "core/BaseModel";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { Address } from "feature-school/address/entities/address.entity";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class School extends BaseModel {
  @OneToOne(() => Principal, o => o.school,{
    cascade: true
  })
  principal: Principal
  // @ApiProperty()
  // @Column({ nullable: false })
  // principalId!: Principal["id"];
  
  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn({name: 'addressId'})
  address: Address;
  // @ApiProperty()
  // @Column({ nullable: false })
  // addressId!: Address["id"];
}
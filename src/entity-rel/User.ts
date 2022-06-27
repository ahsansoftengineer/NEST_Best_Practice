import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Branch } from "./Branch";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @OneToOne(() => Branch)
  @JoinColumn({name: 'branch_id'})
  branch: Branch

  @ManyToMany(() => Product)
  @JoinTable({
    name: 'user_product'
  })
  products: Product[]

  @OneToMany(() => Order, o => o.user)
  orders: Order[];
} 
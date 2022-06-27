import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, OneToMany } from "typeorm";
import { Order } from "./Order";
import { User } from "./User";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantityType: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_product'
  })
  users: User[]

  @OneToMany(() => Order, o => o.product)
  orders: Order[];
}
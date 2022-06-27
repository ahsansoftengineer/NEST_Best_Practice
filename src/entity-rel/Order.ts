import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number

  @ManyToOne(() => Product, {eager: true})
  @JoinColumn({name: 'product_id'})
  product: Product

  @ManyToOne(() => User, {eager: true})
  @JoinColumn({name: 'user_id'}, )
  user: User

  // @ManyToOne(type => Product, product => product.orders, { eager: true })
  // @JoinColumn({name: 'product_id'}, )
  // product: Product

  // @ManyToOne(type => User, user => user.orders, { eager: true })
  // @JoinColumn({name: 'user_id'}, )
  // user: User
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { Category } from "./Category"

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  text: string
  // Unidirectional
  // @ManyToMany(() => Category)
  // @JoinTable()
  // categories: Category[]
  
  // Bi Directional
  // Casecade Enable 
  @ManyToMany((type) => Category, (category) => category.questions, {
    cascade: true,
  })
  @JoinTable({name: 'Question_Category'})
  categories: Category[]
}
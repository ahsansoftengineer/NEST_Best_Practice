import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm"

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  text: string

  @ManyToOne((type) => Category, (category) => category.childCategories)
  parentCategory: Category

  @OneToMany((type) => Category, (category) => category.parentCategory)
  childCategories: Category[]
}
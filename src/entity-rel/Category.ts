import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Question } from "./Question"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    // Bi directional
    // Now you can create record from both side
    @ManyToMany((type) => Category, (category) => category.questions)
    questions: Question[]
}
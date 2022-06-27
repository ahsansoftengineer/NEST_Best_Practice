import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from "typeorm"
import { Photo } from "./Photo"
import { Profile } from "./Profile"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToOne(() => Profile, {eager: true})
  @JoinColumn({name: 'profile_id'})
  profile: Profile

  @OneToMany(() => Photo, (photo) => photo.user, {eager: true})
  photos: Photo[]
}
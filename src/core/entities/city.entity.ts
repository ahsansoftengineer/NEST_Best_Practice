import { Entity, OneToMany, Unique } from 'typeorm';
import { BetaModel } from './beta-model';
import { User } from './user.entity';

@Entity()
@Unique('city-title-unique', ['title'])
export class City extends BetaModel {
  @OneToMany(() => User, (e) => e.city)
  user?: City;
}

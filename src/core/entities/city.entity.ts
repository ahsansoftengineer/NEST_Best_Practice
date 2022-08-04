import { Entity, OneToMany, Unique } from 'typeorm';
import { BetaModel } from './beta-model';
import { LawyerCase } from './lawyer-case.entity';
import { User } from './user.entity';

@Entity()
@Unique('city-title-unique', ['title'])
export class City extends BetaModel {
  @OneToMany(() => User, (e) => e.city)
  user?: City;

  @OneToMany(() => LawyerCase, (e) => e.city)
  casecity?: City;
}

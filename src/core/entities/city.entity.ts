import { Entity, OneToMany } from 'typeorm';
import { BetaModel } from './beta-model';
import { User } from './user.entity';

@Entity()
export class City extends BetaModel {
  @OneToMany(() => User, (e) => e.city)
  user?: City;
}

import { Entity, OneToMany, Unique } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';

@Entity()
@Unique('specialization-title-unique', ['title'])
export class Specialization extends BetaModel {
  @OneToMany(() => Lawyer, (e) => e.specialization)
  lawyers: Lawyer[];
}

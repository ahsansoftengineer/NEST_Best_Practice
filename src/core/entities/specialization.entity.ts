import { Entity, OneToMany } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';

@Entity()
export class Specialization extends BetaModel {
  @OneToMany(() => Lawyer, (e) => e.specialization)
  lawyers: Lawyer[];
}

import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';

@Entity()
export class Court extends BetaModel {
  @ManyToMany(() => Lawyer, (e) => e.court)
  @JoinTable({ name: 'court_lawyer' })
  lawyer?: Lawyer[];
}

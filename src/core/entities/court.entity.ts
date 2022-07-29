import { Entity, JoinTable, ManyToMany, RelationId } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';

@Entity()
export class Court extends BetaModel {
  @ManyToMany(() => Lawyer, (e) => e.courts)
  lawyers: Lawyer[]

  @RelationId((d: Court) => d.lawyers)
  lawyerIds?: number[];
}

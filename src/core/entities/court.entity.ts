import { Entity,  ManyToMany, OneToMany, Unique } from 'typeorm';
import { BetaModel } from './beta-model';
import { LawyerCase } from './lawyer-case.entity';
import { Lawyer } from './lawyer.entity';

@Entity()
@Unique('court-title-unique', ['title'])
export class Court extends BetaModel {
  @ManyToMany(() => Lawyer, (e) => e.courts)
  lawyers?: Lawyer[];

  // @RelationId((d: Court) => d.lawyers)
  // lawyerIds?:number[]

  @OneToMany(() => LawyerCase, (e) => e.court)
  casecourt?: Court;
}

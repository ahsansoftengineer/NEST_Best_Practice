import { Entity, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { BetaModel } from './beta-model';
import { Lawyer } from './lawyer.entity';

@Entity()
export class Court extends BetaModel {
  @ManyToMany(() => Lawyer, (e) => e.courts)
  @JoinTable({
    name: 'court_lawyer',
  })
  @JoinColumn({ foreignKeyConstraintName: 'fk_court_lawyer' })
  lawyers?: Lawyer[];

  // @RelationId((d: Court) => d.lawyer)
  // lawyerIds?:number[]
}

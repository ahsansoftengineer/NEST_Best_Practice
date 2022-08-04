import { BetaModel } from "core/entities";
import { City } from './city.entity';
import { Court } from './court.entity';
<<<<<<< HEAD
=======
import { Lawyer } from './lawyer.entity';

>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
import { Column, Entity, JoinColumn, ManyToOne, RelationId, Unique } from "typeorm";

@Entity()
@Unique('case-title-unique', ['title'])
export class LawyerCase extends BetaModel{

  @Column({ length: 100 })
  suit: string;

  @Column({ length: 100 })
  lasthearing : string;

  @Column({ length: 100 })
  nexthearing : string;

  @ManyToOne(() => City, (e) => e.casecity, { eager: true, nullable: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_city_case' })
  city?: City;

  // @RelationId((x: LawyerCase) => x.city)
  @Column()
  cityId?: number;

  @ManyToOne(() => Court, (e) => e.casecourt, { eager: true, nullable: true })
  @JoinColumn({ foreignKeyConstraintName: 'fk_court_case' })
  court?: Court;

  // @RelationId((x: LawyerCase) => x.court)
  @Column()
  courtId?: number;
<<<<<<< HEAD
=======

  @ManyToOne(() => Lawyer, (x) => x.lawyerCase)
  @JoinColumn({ name: 'lawyerId', foreignKeyConstraintName: 'fk_lawyerCase' })
  lawyer?: Lawyer;

  // @RelationId((d: LawyerTeam) => d.lawyer)
  @Column()
  lawyerId?: number;

>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
  
}

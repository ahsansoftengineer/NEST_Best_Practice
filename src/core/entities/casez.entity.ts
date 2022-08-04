import { Column, Entity, Unique } from 'typeorm';
import { BetaModel } from './beta-model';

@Entity()
@Unique('case-title-unique', ['title'])
export class Casez extends BetaModel {
  @Column({ nullable: true, length: 200 })
  pdf: string;
}

import { Column, Entity } from 'typeorm';
import { AlphaModel } from './alpha-model';
import { BetaModel } from './beta-model';

@Entity()
export class Appoinment extends BetaModel{

  @Column({ length: 40 })
  email: string;

  @Column()
  mobile: number;


}

import {Column } from 'typeorm';
import { AlphaModel } from './alpha-model';

export class BetaModel extends AlphaModel {
  @Column({ length: 100 })
  title: string;
}

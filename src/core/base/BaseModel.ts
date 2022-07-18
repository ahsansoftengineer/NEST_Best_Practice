import {Column } from 'typeorm';
import { DefaultModel } from './DefaultModel';

export class BaseModel extends DefaultModel {
  @Column({ length: 100 })
  title: string;
}

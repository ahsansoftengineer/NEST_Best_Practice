import { Entity, Unique } from 'typeorm';
import { BetaModel } from './beta-model';
@Entity()
@Unique('news-title-unique', ['title'])
export class News extends BetaModel {}

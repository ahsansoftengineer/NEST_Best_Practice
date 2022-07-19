import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService extends BaseService {
  constructor(@InjectRepository(News) public repo: Repository<News>){
    super()
  }
}

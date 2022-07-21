import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { News } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService extends BaseService {
  constructor(@InjectRepository(News) public repo: Repository<News>) {
    super();
  }
}

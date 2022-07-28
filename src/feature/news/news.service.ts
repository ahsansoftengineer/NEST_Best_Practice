import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService extends BaseService {
  constructor(@InjectRepository(News) public repo: Repository<News>) {
    super();
  }
}

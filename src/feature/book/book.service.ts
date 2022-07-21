import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Book } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class BookService extends BaseService {
  constructor(@InjectRepository(Book) public repo: Repository<Book>) {
    super();
  }
}

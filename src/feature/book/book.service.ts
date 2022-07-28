import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class BookService extends BaseService {
  constructor(@InjectRepository(Book) public repo: Repository<Book>) {
    super();
  }
}

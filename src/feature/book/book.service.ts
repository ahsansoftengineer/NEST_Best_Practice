import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService extends BaseService{
  constructor(@InjectRepository(Book) public repo: Repository<Book>){
    super()
  }
}

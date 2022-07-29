import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'core/entities';

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}

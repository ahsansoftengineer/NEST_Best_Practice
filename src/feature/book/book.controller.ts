import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BaseController } from 'core/base';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController extends BaseController{
  constructor(public _ss: BookService) {
    super()
  }
  @Post()
  create(@Body() body: CreateBookDto) {
    return this._ss.createSimple(body);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateBookDto,
  ) {
    return this._ss.updateSimple(id, body);
  }

}

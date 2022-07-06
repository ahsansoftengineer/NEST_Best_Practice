import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { DifferentDbService } from './different-db.service';
import { CreateDifferentDbDto } from './dto/create-different-db.dto';
import { UpdateDifferentDbDto } from './dto/update-different-db.dto';

@Controller('different-db')
@ApiTags('different-db')
export class DifferentDbController extends BaseController {
  constructor(public _ss: DifferentDbService) {
    super()
  }
  @Post()
  create(@Body() data: CreateDifferentDbDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDifferentDbDto) {
    return this._ss.update(id, data);
  }
}

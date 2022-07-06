import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HomeWorkService } from './home-work.service';
import { CreateHomeWorkDto } from './dto/create-home-work.dto';
import { UpdateHomeWorkDto } from './dto/update-home-work.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';

@Controller('home_work')
@ApiTags('home_work')
export class HomeWorkController extends BaseController{
  constructor(public _ss: HomeWorkService) {
    super()
  }
  @Post()
  create(@Body() data: CreateHomeWorkDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateHomeWorkDto) {
    return this._ss.update(id, data);
  }
}

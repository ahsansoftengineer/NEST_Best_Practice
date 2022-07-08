import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ReportzService } from './reportz.service';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';
import { BaseController } from "core";

import { ApiTags } from '@nestjs/swagger';

@Controller('report')
@ApiTags('report')
export class ReportzController extends BaseController{
  constructor(public _ss: ReportzService) {
    super()
  }
  @Post()
  create(@Body() data: CreateReportzDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() data: UpdateReportzDto) {
    return this._ss.updateSimple(id, data);
  }
}

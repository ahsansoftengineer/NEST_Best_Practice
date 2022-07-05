import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ReportzService } from './reportz.service';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';
import { BaseController } from 'core/BaseController';
import { ApiTags } from '@nestjs/swagger';

@Controller('report')
@ApiTags('report')
export class ReportzController extends BaseController {
  constructor(readonly _ss: ReportzService) {
    super()
    // super._ss = this._ss
  }
  @Post()
  create(@Body() data: CreateReportzDto) {
    console.log(data)
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateReportzDto) {
    return this._ss.update(id, data);
  }
}

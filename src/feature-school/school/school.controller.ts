import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';

@Controller('school')
@ApiTags('school')
export class SchoolController extends BaseController {
  constructor(public _ss: SchoolService) {
    super()
  }
  @Post()
  create(@Body() data: CreateSchoolDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSchoolDto) {
    return this._ss.update(id, data);
  }
}

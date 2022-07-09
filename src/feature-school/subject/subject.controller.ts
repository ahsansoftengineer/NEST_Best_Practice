import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';

@Controller('subject')
@ApiTags('subject')
export class SubjectController extends BaseController {
  constructor(public _ss: SubjectService) {
    super()
  }
  @Post()
  create(@Body() data: CreateSubjectDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSubjectDto) {
    return this._ss.updateSimple(id, data);
  }
}

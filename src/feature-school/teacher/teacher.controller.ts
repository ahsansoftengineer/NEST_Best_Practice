import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';

@ApiTags('teacher')
@Controller('teacher')
export class TeacherController extends BaseController {
  constructor(public _ss: TeacherService) {
    super();
  }
  @Post()
  create(@Body() data: CreateTeacherDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTeacherDto,
  ) {
    return this._ss.updateSimple(id, data);
  }
}

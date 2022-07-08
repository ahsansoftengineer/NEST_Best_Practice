import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { BaseController } from 'core/BaseController';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('student')
@Controller('student')
export class StudentController extends BaseController {
  constructor(public _ss: StudentService) {
    super()
  }
  @Post()
  create(@Body() data: CreateStudentDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateStudentDto) {
    return this._ss.updateSimple(id, data);
  }
}

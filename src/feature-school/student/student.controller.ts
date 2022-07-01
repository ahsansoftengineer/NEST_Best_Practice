import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Http2ServerResponse } from 'http2';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Student } from './entities/student.entity';

@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(private readonly _ss: StudentService) {}
  @Get()
  findAll() {
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._ss.findOne(+id);
  }
  @Post()
  create(@Body() data: CreateStudentDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateStudentDto) {
    return this._ss.update(id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

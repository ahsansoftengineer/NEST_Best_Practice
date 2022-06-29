import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly _ss: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this._ss.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this._ss.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._ss.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateStudentDto) {
    return this._ss.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._ss.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentClassService } from './student-class.service';
import { CreateStudentClassDto } from './dto/create-student-class.dto';
import { UpdateStudentClassDto } from './dto/update-student-class.dto';

@Controller('student-class')
export class StudentClassController {
  constructor(private readonly studentClassService: StudentClassService) {}

  @Post()
  create(@Body() createStudentClassDto: CreateStudentClassDto) {
    return this.studentClassService.create(createStudentClassDto);
  }

  @Get()
  findAll() {
    return this.studentClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentClassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentClassDto: UpdateStudentClassDto) {
    return this.studentClassService.update(+id, updateStudentClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentClassService.remove(+id);
  }
}

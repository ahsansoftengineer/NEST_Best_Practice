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
import { StudentClassService } from './student-class.service';
import { CreateStudentClassDto } from './dto/create-student-class.dto';
import { UpdateStudentClassDto } from './dto/update-student-class.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('student-class')
@ApiTags('student-class')
export class StudentClassController {
  constructor(public _ss: StudentClassService) {}
  @Get()
  findAll() {
    return this._ss.findAll();
  }
  @Get(':dateFrom')
  findOne(@Param('dateFrom', ParseIntPipe) dateFrom: Date) {
    return this._ss.findOne(dateFrom);
  }
  @Delete(':dateFrom')
  remove(@Param('dateFrom') dateFrom: Date) {
    return this._ss.remove(dateFrom);
  }

  @Post()
  create(@Body() data: CreateStudentClassDto) {
    // const rec:any = await this._ss.
    return this._ss.create(data);
  }
  @Patch(':dateFrom')
  update(
    @Param('dateFrom', ParseIntPipe) dateFrom: Date,
    @Body() data: UpdateStudentClassDto,
  ) {
    return this._ss.update(dateFrom, data);
  }
}

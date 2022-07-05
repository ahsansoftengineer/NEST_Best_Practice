import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('school')
@ApiTags('school')
export class SchoolController {
  constructor(private readonly _ss: SchoolService) {}
  @Get()
  findAll(){
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._ss.findOne(+id);
  }
  @Post()
  create(@Body() data: CreateSchoolDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSchoolDto) {
    return this._ss.update(id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this._ss.remove(+id);
    
  }
}

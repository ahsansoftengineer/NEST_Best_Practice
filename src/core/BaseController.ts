import { Controller, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { Http2ServerResponse } from 'http2';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseService } from './BaseService';

@Controller('student')
export class BaseController {
  _ss: any
  @Get()
  findAll() {
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this._ss.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

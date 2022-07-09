import { Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BaseService } from './index';

export abstract class BaseController {
  _ss: BaseService
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

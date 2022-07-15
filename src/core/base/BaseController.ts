import { Get, Param, Delete, ParseIntPipe, Post, Body, Patch } from '@nestjs/common';
import { BaseService, CreateDto } from './index';

export abstract class BaseController {
  _ss: BaseService;
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
  
  // @Post()
  // create(@Body() body: CreateDto) {
  //   return this._ss.createSimple(body);
  // }
  // @Patch(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() body: CreateDto,
  // ) {
  //   return this._ss.updateSimple(id, body);
  // }
}

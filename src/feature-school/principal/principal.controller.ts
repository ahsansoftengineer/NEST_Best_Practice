import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
@ApiTags('principal')
@Controller('principal')
export class PrincipalController extends BaseController{
  constructor(public _ss: PrincipalService) {
    super()
  }
  @Post()
  create(@Body() data: CreatePrincipalDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePrincipalDto) {
    return this._ss.update(id, data);
  }
}
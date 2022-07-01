import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('teacher')
@Controller('principal')
export class PrincipalController {
  constructor(private readonly _ss: PrincipalService) {}
  @Get()
  findAll(){
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._ss.findOne(+id);
  }
  @Post()
  create(@Body() data: CreatePrincipalDto) {
    return this._ss.create(data);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePrincipalDto) {
    return this._ss.update(id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}
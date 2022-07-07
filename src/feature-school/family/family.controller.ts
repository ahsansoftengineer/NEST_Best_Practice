import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { FamilyService } from './family.service';

@Controller('family')
@ApiTags('family')
export class FamilyController  extends BaseController {
  constructor(public _ss: FamilyService) {
    super()
  }
  @Post()
  create(@Body() data: CreateFamilyDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() data: UpdateFamilyDto) {
    return this._ss.updateSimple(id, data);
  }
}

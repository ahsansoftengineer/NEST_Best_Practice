import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { AppoinmentService } from './appoinment.service';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';
import { UpdateAppoinmentDto } from './dto/update-appoinment.dto';


@Controller('appoinment')
@ApiTags('appoinment')
export class AppoinmentController extends BaseController{
  constructor(public _ss: AppoinmentService) {
    super()
  }

  @Post()
  @Public()
  uploadFile(
    @Body() body: CreateAppoinmentDto,
    ) {
      return this._ss.createSimple(body);
  }

  @Patch(':id')
  @Public()
  async update(
    @Param('id') id: number,
    @Body() body: UpdateAppoinmentDto,
  ) {
    return this._ss.updateSimple(id,body);
  }

}

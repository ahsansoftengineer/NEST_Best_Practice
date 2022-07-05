import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { ClassRoomService } from './class-room.service';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';

@Controller('class')
@ApiTags('class')
export class ClassRoomController extends BaseController {
  constructor(readonly _ss: ClassRoomService) {
    super()
  }
  @Post()
  create(@Body() data: CreateClassRoomDto) {
    // const rec:any = await this._ss. 
    return this._ss.create(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() data: UpdateClassRoomDto
  ) {
    return this._ss.update(id, data);
  }
}

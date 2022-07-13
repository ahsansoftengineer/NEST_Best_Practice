import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { ClassRoomService } from './class-room.service';
import {
  CreateClassRoomDto,
  UpdateClassRoomDto,
} from './dto/create-class-room.dto';

@Controller('class')
@ApiTags('class')
export class ClassRoomController extends BaseController {
  constructor(readonly _ss: ClassRoomService) {
    super();
  }
  @Post()
  create(@Body() data: CreateClassRoomDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateClassRoomDto,
  ) {
    return this._ss.updateSimple(id, data);
  }
}

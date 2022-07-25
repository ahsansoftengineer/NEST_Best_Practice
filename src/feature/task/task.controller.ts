import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BaseController } from 'core/base';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('task')
@ApiTags('task')
export class TaskController extends BaseController {
  constructor(public _ss: TaskService) {
    super();
  }

  @Post()
  @Roles(ROLE.LAWYER)
  uploadFile(@Body() body: CreateTaskDto) {
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @Roles(ROLE.LAWYER)
  async update(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    return this._ss.updateSimple(id, body);
  }

  @Roles(ROLE.LAWYER)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

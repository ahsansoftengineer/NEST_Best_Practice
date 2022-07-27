import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId, Roles } from 'core/decorators';
import { ROLE } from 'core/enums';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(public _ss: TaskService) {
  }

  @Get()
  @Roles(ROLE.LAWYER)
  gets(@GetCurrentUserId() userId: number) {
    return this._ss.gets(userId);
  }

  @Get(':id')
  @Roles(ROLE.LAWYER)
  get(
    @GetCurrentUserId() userId: number,
    @Param('id') id: number
    ) {
    return this._ss.get(userId, id);
  }

  @Post()
  @Roles(ROLE.LAWYER)
  createTeamTask(
    @Body() body: CreateTaskDto,
    @GetCurrentUserId() userId: number,
    ) {
    return this._ss.create(body, userId);
  }

  @Roles(ROLE.LAWYER)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @GetCurrentUserId() userId: number,
    @Body() body: UpdateTaskDto,
    ) {
    return this._ss.update(userId, +id, body);
  }

  @Roles(ROLE.LAWYER)
  @Delete(':id')
  async remove(
    @Param('id') id: number,
    @GetCurrentUserId() userId: number,
    ) {
    return this._ss.delete(userId, +id);
  }
}

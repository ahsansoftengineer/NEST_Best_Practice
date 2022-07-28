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
import { Roles } from 'core/decorators';

import { ROLE } from 'core/enums';
import { AppoinmentService } from './appoinment.service';
import { CreateAppoinmentDto, UpdateAppoinmentDto } from './dto/create-appoinment.dto';

@Controller('appoinment')
@ApiTags('appoinment')
export class AppoinmentController {
  constructor(public _ss: AppoinmentService) {
  }

  @Get('admin-list')
  @Roles(ROLE.ADMIN)
  adminList(
    @Body() body: CreateAppoinmentDto

    ) {
    // return this._ss.adminList(body);
  }

  @Get('lawyer-list')
  @Roles(ROLE.LAWYER)
  lawyerList(@Body() body: CreateAppoinmentDto) {
    // return this._ss.lawyerList(body);
  }
  @Post()
  @Roles(ROLE.LAWYER)
  create(@Body() body: CreateAppoinmentDto) {
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @Roles(ROLE.LAWYER)
  async update(@Param('id') id: number, @Body() body: UpdateAppoinmentDto) {
    return this._ss.updateSimple(id, body);
  }

  @Roles(ROLE.LAWYER)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

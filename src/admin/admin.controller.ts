import { Controller, Post, Body, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {Roles } from 'core/decorators';

import { ROLE } from 'core/enums';
import { AdminService } from './admin.service';
import { ChangeStatusDto } from './dto';
import { AdminCauseListDto } from './dto/admin-cause-list.dto';
import { AdminSendMailDto } from './dto/admin-sendmail.dto';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
  constructor(public _ss: AdminService) {}

  @Get('cause-list-admin')
  @Roles(ROLE.ADMIN)
  findCauseList(
    @Query() body:AdminCauseListDto) { 
      return this._ss.causeListAdmin(body) 
  }

  @Patch('lawyer/change-status')
  @Roles(ROLE.ADMIN)
  changeLawyerStatus(@Body() body: ChangeStatusDto) {
    return this._ss.changeStatusUser(body);
  }

  @Get('lawyer')
  @Roles(ROLE.ADMIN)
  getLawyers(@Param() query: any) {
    console.log(query);
    return this._ss.getLawyers();
  }

  @Get('lawyer/:id')
  @Roles(ROLE.ADMIN)
  getLawyer(@Param('id') id: number) {
    return this._ss.getLawyer(id);
  }


  @Post('email')
  @Roles(ROLE.ADMIN)
  sendEmail(@Body() body:AdminSendMailDto){    
    this._ss.sendEmail(body)
  }
}

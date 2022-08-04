import { Controller, Post, Body, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'core/decorators';

import { ROLE } from 'core/enums';
import { AdminService } from './admin.service';
import { ChangeStatusDto } from './dto';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
  constructor(public _ss: AdminService) {}
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

  @Get('causelistadmin')
  @Roles(ROLE.ADMIN)
  findCauseList(
    @Query() {courtId,nexthearing}) {
      return this._ss.causeListAdmin(courtId,nexthearing)
  }
}

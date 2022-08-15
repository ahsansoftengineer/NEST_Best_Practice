import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'core/decorators';

import { ROLE, STATUS_APPOINT } from 'core/enums';
import { AppoinmentService } from './appoinment.service';
import {
  CreateAppoinmentDto,
} from './dto/create-appoinment.dto';
import { UpdateStatusAdminAppoinmentDto } from './dto/update-statusAdmin-appoinment.dto';
import { UpdateStatusLawyerAppoinmentDto } from './dto/update-statusLawyer-appoinment.dto';

@Controller('appointment')
@ApiTags('appointment')
export class AppoinmentController {
  constructor(public _ss: AppoinmentService) {}

  @Get('admin-list')
  @Roles(ROLE.ADMIN)
  adminList(@Query('status') status: STATUS_APPOINT) {
    return this._ss.adminList(status);
  }

  @Get('lawyer-list')
  @Roles(ROLE.LAWYER)
  lawyerList(@Query('status') status: STATUS_APPOINT) {
    if (!status || 'Accept,Reject,Direct'.indexOf(status) != -1)
      return this._ss.lawyerList(status);
    throw new HttpException(
      'you are only authorized for Accept & Reject',
      HttpStatus.FORBIDDEN,
    );
  }
  @Public()
  @Post()
  create(@Body() body: CreateAppoinmentDto) {
    return this._ss.create(body);
  }

  @Patch('admin-status')
  @Roles(ROLE.ADMIN)
  async statusAdmin(@Body() body: UpdateStatusAdminAppoinmentDto) {
    return this._ss.statusAdmin(body);
  }

  @Patch('lawyer-status')
  @Roles(ROLE.LAWYER)
  async statusLawyer(@Body() body: UpdateStatusLawyerAppoinmentDto) {
    if (STATUS_APPOINT.ACCEPT == body.status || STATUS_APPOINT.REJECT == body.status)
      return this._ss.statusLawyer(body);
    throw new HttpException(
      'you are only authorized for Accept & Reject',
      HttpStatus.FORBIDDEN,
    );
  }

  // @Roles(ROLE.LAWYER)
  // @Delete(':id')
  // async remove(@Param('id') id: number) {
  //   return this._ss.remove(+id);
  // }
}

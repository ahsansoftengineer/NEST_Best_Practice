import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Roles } from 'core/decorators';

import { ROLE } from 'core/enums';
import { CourtService } from './court.service';
import { CreateCourtDto, UpdateCourtDto } from './dto/create-court.dto';

@Controller('court')
@ApiTags('court')
export class CourtController extends BaseController {
  constructor(public _ss: CourtService) {
    super();
  }

  @Post()
  // @Public()
  @Roles(ROLE.ADMIN)
  uploadFile(@Body() body: CreateCourtDto) {
    return this._ss.createSimple(body).catch(console.log);
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
  async update(@Param('id') id: number, @Body() body: UpdateCourtDto) {
    return this._ss.updateSimple(id, body);
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

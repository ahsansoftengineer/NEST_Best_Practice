import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { CreateSpecializationDto, UpdateSpecializationDto } from './dto/create-specialization.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { Public } from 'core/decorators';

@Controller('specialization')
@ApiTags('specialization')
export class SpecializationController extends BaseController{
  constructor(public _ss: SpecializationService) {
    super()
  }

  @Post()
  // @Public()
  @Roles(ROLE.ADMIN)
  uploadFile(
    @Body() body: CreateSpecializationDto,
    ) {
      return this._ss.createSimple(body).catch(console.log);
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
  async update(
    @Param('id') id: number,
    @Body() body: UpdateSpecializationDto,
  ) {
    return this._ss.updateSimple(id,body);
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id)
  }
}

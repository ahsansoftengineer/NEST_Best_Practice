import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { CityService } from './city.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Controller('city')
@ApiTags('city')
export class CityController extends BaseController {
  constructor(public _ss: CityService) {
    super()
  }
  @Post()
  // @Public()
  @Roles(ROLE.ADMIN)
  uploadFile(
    @Body() body: CreateCityDto,
    ) {
      return this._ss.createSimple(body).catch(console.log);
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
  async update(
    @Param('id') id: number,
    @Body() body: UpdateCityDto,
  ) {
    return this._ss.updateSimple(id,body);
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id)
  }
}

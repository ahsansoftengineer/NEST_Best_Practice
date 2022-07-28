import { Get, Param } from '@nestjs/common';
import { BaseService } from 'core/service';

export abstract class BaseController {
  _ss: BaseService;
  @Get()
  findAll() {
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this._ss.findOne(id);
  }
  // @ApiTags()
  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this._ss.remove(+id);
  // }

  // @Post()
  // create(@Body() body: CreateDto) {
  //   return this._ss.createSimple(body);
  // }
  // @Patch(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() body: CreateDto,
  // ) {
  //   return this._ss.updateSimple(id, body);
  // }
}

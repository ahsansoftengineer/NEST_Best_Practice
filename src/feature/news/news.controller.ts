import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { BaseController } from 'core/base';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { NewsService } from './news.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('news')
@ApiTags('news')
export class NewsController extends BaseController {
  constructor(public _ss: NewsService) {
    super();
  }

  @Post()
  @Roles(ROLE.ADMIN)
  uploadFile(@Body() body: CreateNewsDto) {
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
  async update(@Param('id') id: number, @Body() body: UpdateNewsDto) {
    return this._ss.updateSimple(id, body);
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this._ss.remove(+id);
  }
}

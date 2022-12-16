import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'core/decorators';

@Controller('')
@ApiTags('')
export class AppController {
  @Public()
  @Get('')
  public(
  ):string {
    return '<h1> App is working </h1>'
  }
}

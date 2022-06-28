import {  Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('home')
@Controller()
export class AppController {
  @Get('/')
  async getHello() {
    return {
      message: "Hello from Swagger"
    }
  }
}

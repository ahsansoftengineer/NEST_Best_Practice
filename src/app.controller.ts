import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'auth/local-auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hellow-world')
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return this.appService.getHello();
  }
}

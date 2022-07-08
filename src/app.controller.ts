import { Controller, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'auth/local-auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hellowWorld')
  @UseGuards(LocalAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}

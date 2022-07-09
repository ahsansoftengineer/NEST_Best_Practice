import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService} from '@nestjs/config';
import { LocalAuthGuard } from 'auth/guard/local-auth.guard';
import { ConfigType } from 'core/interface/ConfigType';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {
      
    }

  @Get('hellow-world')
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(LocalAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}

import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  Session,
} from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly _ss: AuthService) {}
  @Post('sign-in')
  // @UseGuards(LocalAuthGuard)
  @Public()
  signIn(@Request() req, @Body() body: SignInDto) {
    console.log(body);

    return this._ss.validateUser(body);
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    return this._ss.signUp(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('public')
  mypublicRoute(@Body() body) {
    console.log({ public: 'Public Route Decorated', body });
  }

  @Public()
  @Get('session')
  getAuthSession(@Session() session: Record<string, any>) {
    session.authenticated = true;
    return { session, sid: session.id };
    // session.id
  }
}

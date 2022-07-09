import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtAuthGuard } from './guard/auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly _ss: AuthService) {}
  @Post('sign-in')
  @UseGuards(LocalAuthGuard)
  signIn(@Body() body: SignInDto) {
    return this._ss.validateUser(body);
  }

  @Post('sign-up')
  async signUp(@Body() body: SignUpDto) {
    return this._ss.signUp(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProfile(@Body() body) {
    return body;
  }
}

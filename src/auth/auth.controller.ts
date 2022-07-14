import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Public, GetCurrentUserId, GetCurrentUser } from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private _ss: AuthService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() body: SignUpDto): Promise<Tokens> {
    return this._ss.signupLocal(body);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() body: SignInDto): Promise<Tokens> {
    return this._ss.signinLocal(body);
  }
  @Public()
  @Post('forget-password')
  @HttpCode(HttpStatus.OK)
  forgetPassword(@Body() body: {email: string}): Promise<Tokens> {
    return this._ss.forgetPassword(body.email);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this._ss.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this._ss.refreshTokens(userId, refreshToken);
  }
}

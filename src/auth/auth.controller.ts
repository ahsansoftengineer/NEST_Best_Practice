import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Public, GetCurrentUserId, GetCurrentUser } from '../core/decorators';
import { RtGuard } from '../core/guards';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private _ss: AuthService) {}

  @Public()
  @Post('local/sign-up')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() body: SignUpDto): Promise<Tokens> {
    return this._ss.signupLocal(body);
  }

  @Public()
  @Post('local/sign-in')
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

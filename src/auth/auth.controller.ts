import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ROLE, STATUS } from 'core/enums';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';

import { Public, GetCurrentUserId, GetCurrentUser } from '../core/decorators';
import { RtGuard } from '../core/guards';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { SignUpLawyerDto } from './dto/sign-up-lawyer.dto';
import { UpdateUser } from './dto/user-update.dto';
import { Tokens } from './types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private _ss: AuthService) {


  }
  // Admin ka kia karna hai
  @Public()
  @Post('local/sign-up-admin')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(InterceptorImage)
  signUpAdmin(
    @Body() body: SignUpDto,
    @UploadedFile() image: Express.Multer.File,
    ): Promise<Tokens> {
    body.role = ROLE.ADMIN
    body.status = STATUS.ACTIVE

    if(image?.filename){
      body.image = image.filename
      //  throw new HttpException('admin profile image is required', HttpStatus.FORBIDDEN)
    }
    try{
      return this._ss.signUpAdmin(body);
    }catch(e){
      HandleUniqueError(e)
    }
  }

  @Public()
  @Post('local/sign-up')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(InterceptorImage)
  signupLawyer(
    @Body() body: SignUpLawyerDto,
    @UploadedFile() image: Express.Multer.File,
    ): Promise<Tokens> {
    if(!image?.filename) throw new HttpException('user profile image is required', HttpStatus.FORBIDDEN)
    body.image = image.filename
    try{
      return this._ss.signUpLawyer(body);
    }catch(e){
      HandleUniqueError(e)
    }
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

import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';

import { Public, GetCurrentUserId, GetCurrentUser } from '../core/decorators';
import { RtGuard } from '../core/guards';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { UpdateUser } from './dto/user-update.dto';
import { Tokens } from './types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private _ss: AuthService) {}

  @Public()
  @Post('local/sign-up')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(InterceptorImage)
  signupLocal(
    @Body() body: SignUpDto,
    @UploadedFile() image: Express.Multer.File,
    ): Promise<Tokens> {
    if(!image?.filename) throw new HttpException('user profile image is required', HttpStatus.FORBIDDEN)
    body.image = image.filename
    try{
      return this._ss.signupLocal(body);
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

  @Patch('user/:email')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(InterceptorImage)
  async updateUser(
    @Body() body: UpdateUser,
    @Param('email') email: string,
    @UploadedFile() image: Express.Multer.File,
    ){
      const result = await this._ss.repo.findOneBy({email})
      if(!result) throw new HttpException(`email ${email} does not exsist`, HttpStatus.NOT_FOUND)
      if(image){
        await unlink('public/' + result.image)
        body.image = image.filename
      }
      return this._ss.updateUser(email, body, result);
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

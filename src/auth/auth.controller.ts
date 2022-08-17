import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ROLE, STATUS } from 'core/enums';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { InterceptorImage, Interceptor_Files_PDF_Image } from 'core/interceptor';

import { Public, GetCurrentUserId, GetCurrentUser, Roles } from '../core/decorators';
import { RtGuard } from '../core/guards';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
import { LawyerGetOrInvite } from './dto/lawyer-get&invite.dto';
import { SignUpLawyerDto } from './dto/sign-up-lawyer.dto';
import { Tokens } from './types';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private _ss: AuthService) {}
  // Admin ka kia karna hai
  @Public()
  @Post('local/sign-up-admin')
  @UseInterceptors(InterceptorImage)
  signUpAdmin(
    @Body() body: SignUpDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Tokens> {
    body.role = ROLE.ADMIN;
    body.status = STATUS.ACTIVE;

    if (image?.filename) {
      body.image = image.filename;
      //  throw new HttpException('admin profile image is required', HttpStatus.FORBIDDEN)
    }
    try {
      return this._ss.signUpAdmin(body);
    } catch (e) {
      HandleUniqueError(e);
    }
  }

  @Public()
  @Post('local/sign-up-lawyer')
  @UseInterceptors(Interceptor_Files_PDF_Image)
  signupLawyer(
    @Body() body: SignUpLawyerDto,
    @UploadedFiles()
    files: { image?: Express.Multer.File[]; pdf?: Express.Multer.File[] },
  ): Promise<Tokens> {
    body.courtIds = JSON.parse(body.courtIds.toString());

    if (!files?.image || !files?.image[0]?.filename)
      throw new HttpException('image is required', HttpStatus.BAD_REQUEST);
    body.image = files.image[0].filename;
    if (!files?.pdf || !files?.pdf[0]?.filename)
      throw new HttpException(
        'licenes pdf document is required',
        HttpStatus.BAD_REQUEST,
      );
    body.license = files.pdf[0].filename;

    try {
      return this._ss.signUpLawyer(body);
    } catch (e) {
      HandleUniqueError(e); 
    }
  }

  @Public()
  @Post('local/sign-in')
  signinLocal(@Body() body: SignInDto): Promise<Tokens> {
    return this._ss.signinLocal(body);
  }

  @Public()
  @Post('forget-password')
  forgetPassword(@Body() { email }) {
    return this._ss.forgetPassword(email);
  }

  @Public()
  @Post('forget-change-password')
  forgetChangePassword(@Body() { forgetPasswordToken, password, confirmPassword }) {
    if(password != confirmPassword) 
      throw new HttpException('password confirmPassword not matched', HttpStatus.BAD_REQUEST)
    return this._ss.forgetPasswordUpdate({forgetPasswordToken, password});
  }

  @Post('change-password')
  changePassword(
    @GetCurrentUserId() id: string,
    @Body() { password, confirmPassword }
    ) {
    if(password != confirmPassword) 
      throw new HttpException('password confirmPassword not matched', HttpStatus.BAD_REQUEST)
    return this._ss.changePassword({id, password});
  }

  @Post('logout')
  logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this._ss.logout(userId);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this._ss.refreshTokens(userId, refreshToken);
  }

  @Get('lawyer-name-email')
  @Roles(ROLE.LAWYER)
  getLawyer(@Query() body:LawyerGetOrInvite) {
    return this._ss.getLawyerByName(body);
  }

  @Post('send-invitation')
  @Roles(ROLE.LAWYER)
  async sendinvite(@GetCurrentUser() user, @Body() {name,email} ){
    await this._ss.invitelawyer({to: email, name, from: user.name,})
    return {message: 'invitation sent'}

  }
}

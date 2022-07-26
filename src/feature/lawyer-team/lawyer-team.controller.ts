import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { CreateLawyerTeamDto } from './dto/lawyer-team.dto';

import { ROLE } from 'core/enums';
import { InterceptorImage } from 'core/interceptor';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { GetCurrentUserId, Roles } from 'core/decorators';

@Controller('lawyer-team')
export class LawyerTeamController {
  constructor(private readonly _ss: LawyerTeamService) {}

  @Roles(ROLE.LAWYER)
  @Post()
  @UseInterceptors(InterceptorImage)
  create(
    @Body() body: CreateLawyerTeamDto,
    @UploadedFile() image: Express.Multer.File,
  ){
    if (!image?.filename)
      throw new HttpException(
        'user profile image is required',
        HttpStatus.FORBIDDEN,
      );
    body.image = image.filename;
    try {
      return this._ss.create(body);
    } catch (e) {
      HandleUniqueError(e);
    }
  }

  @Roles(ROLE.LAWYER)
  @Get('members')
  getLawyerMembers(
    @GetCurrentUserId() userId: number
  ){
    console.log({userId});
    return this._ss.getLawyerMembers(userId)
  }

  @Roles(ROLE.LAWYER)
  @Get('members')
  getLawyerMember(
    @GetCurrentUserId() userId: number,
    @Param('id') id: number
  ){
    console.log({userId});
    return this._ss.getLawyerMembers(userId)
  }

  @Roles(ROLE.LAWYER)
  @Get('members/:id')
  deleteMember(
    @GetCurrentUserId() userId: number,
    @Param('id') id: number
  ){
    console.log({userId});
    return this._ss.deleteLawyerMember(userId, id)
  }
}

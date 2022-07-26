import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { CreateLawyerTeamDto, UpdateLawyerTeamDto } from './dto/lawyer-team.dto';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { InterceptorImage } from 'core/interceptor';
import { HandleUniqueError } from 'core/error/HandleUniqueError';

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
}
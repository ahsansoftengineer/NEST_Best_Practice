import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';
import { ApiTags } from '@nestjs/swagger';

import { ROLE } from 'core/enums';
import { InterceptorImage } from 'core/interceptor';
import { GetCurrentUserId, Roles } from 'core/decorators';
import { HandleUniqueError } from 'core/error/HandleUniqueError';

@Controller('lawyer-client')
@ApiTags('lawyer-client')
export class LawyerClientController {
  constructor(public _ss: LawyerClientService) {}

  @Roles(ROLE.LAWYER)
  @Post()
  @UseInterceptors(InterceptorImage)
  create(
    @Body() body: CreateLawyerClientDto,
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
  getLawyerClients(
    @GetCurrentUserId() userId: number
  ){
    console.log({userId});
    return this._ss.getLawyerClients(userId)
  }

  @Roles(ROLE.LAWYER)
  @Get('members/:id')
  getLawyerClient(
    @GetCurrentUserId() userId: number,
    @Param('id') id: number
  ){
    console.log({userId});
    return this._ss.getLawyerClient(userId, id)
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

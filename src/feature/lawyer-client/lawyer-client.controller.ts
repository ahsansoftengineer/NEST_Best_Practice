import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';
import { ApiTags } from '@nestjs/swagger';

import { ROLE } from 'core/enums';
import { InterceptorImage } from 'core/interceptor';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { GetCurrentUserId, Roles } from 'core/decorators';

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
    @GetCurrentUserId() userId: number
    
  ) {
    body['lawyerId'] = userId
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
  @Get('clients')
  getLawyerClients(@GetCurrentUserId() userId: number) {
    console.log({ userId });
    return this._ss.getLawyerClients(userId);
  }

  @Roles(ROLE.LAWYER)
  @Get('clients/:id')
  getLawyerClient(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this._ss.getLawyerClient(userId, id);
  }

  @Roles(ROLE.LAWYER)
  @Delete('clients/:id')
  deleteMember(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this._ss.deleteLawyerMember(userId, id);
  }
}

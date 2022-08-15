import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { CreateLawyerTeamDto, UpdateLawyerTeamDto } from './dto/lawyer-team.dto';

import { ROLE } from 'core/enums';
import { GetCurrentUserId, GetJwtPayload, Roles } from 'core/decorators';
import { JwtPayload } from 'auth/types';
import { ApiTags } from '@nestjs/swagger';


@Controller('lawyer-team')
@ApiTags('lawyer-team')
export class LawyerTeamController {
  constructor(private readonly _ss: LawyerTeamService) {}

  @Roles(ROLE.LAWYER)
  @Post()
  // @UseInterceptors(InterceptorImage)
  create( 
    @Body() body: CreateLawyerTeamDto,
    @GetJwtPayload() user: JwtPayload,
    // @UploadedFile() image: Express.Multer.File,
  ) {
    // if (!image?.filename)
    //   throw new HttpException(
    //     'user profile image is required',
    //     HttpStatus.FORBIDDEN,
    //   );
    // body.image = image.filename;
    // body['lawyerId'] = userId
    return this._ss.create(body, user);
  }

  @Roles(ROLE.LAWYER)
  @Get('members')
  getLawyerMembers(@GetCurrentUserId() userId: number) {
    return this._ss.getLawyerMembers(userId);
  }

  @Roles(ROLE.LAWYER)
  @Get('members/:id')
  getLawyerMember(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this._ss.getLawyerMember(userId, id);
  }

  @Roles(ROLE.LAWYER)
  @Delete('members/:id')
  deleteMember(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this._ss.deleteLawyerMember(userId, id);
  }

  @Roles(ROLE.TEAM)
  @Patch('update-members/:id')
  update( @Param('id') id: number, @Body() body: UpdateLawyerTeamDto) {
      return this._ss.updateteam(id, body);
    } 
}

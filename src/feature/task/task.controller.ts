import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  UploadedFile,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtPayload } from 'auth/types';
import { GetCurrentUserId, GetJwtPayload, Roles } from 'core/decorators';
import { ROLE } from 'core/enums';
import { InterceptorPDF } from 'core/interceptor';
import { CreateLawyerTaskDto, CreateTeamTaskDto } from './dto/create-task.dto';
import { UpdateStatusTaskDto } from './dto/update-status-task.dto';
import { TaskService } from './task.service';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(public _ss: TaskService) {}

  @Get()
  @Roles(ROLE.LAWYER, ROLE.TEAM)
  gets(@GetJwtPayload() p: JwtPayload) {
    const search: any = {};
    const key = p.role == ROLE.LAWYER ? 'lawyerId' : 'lawyerTeamId';
    search[key] = p.sub;
    return this._ss.repos.task.findBy(search);
  }

  @Get(':id')
  @Roles(ROLE.LAWYER)
  get(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    return this._ss.get(userId, id);
  }

  @Post('team')
  @Roles(ROLE.LAWYER)
  @UseInterceptors(InterceptorPDF)
  createTeamTask(
    @Body() body: CreateTeamTaskDto,
    @GetCurrentUserId() userId: number,
    @UploadedFile() pdf: Express.Multer.File,
  ) {
    if(pdf?.filename){
      body.pdf = pdf.filename;
    }
    return this._ss.createTeamTask(body, userId);
  }

  @Post('lawyer')
  @Roles(ROLE.LAWYER)
  @UseInterceptors(InterceptorPDF)
  createLawyerTask(
    @Body() body: CreateLawyerTaskDto,
    @GetCurrentUserId() userId: number,
    @UploadedFile() pdf: Express.Multer.File,
  ) {
    if (pdf?.filename) {
      body.pdf = pdf.filename;
      //  throw new HttpException('admin profile image is required', HttpStatus.FORBIDDEN)
    }
    return this._ss.createLawyerTask(body, userId);
  }

  @Patch('lawyer-status')
  @Roles(ROLE.LAWYER)
  @UseInterceptors(InterceptorPDF)
  statusLawyerTask(@Body() body: UpdateStatusTaskDto,
  @GetCurrentUserId() userId: number,
  @UploadedFile() pdf: Express.Multer.File) {
  if(pdf?.filename){
    body.pdf = pdf.filename;
  }            
    return this._ss.statusLawyerTask(body, userId);
  }

  @Patch('team-status')
  @Roles(ROLE.TEAM,ROLE.LAWYER)
  @UseInterceptors(InterceptorPDF)
  statusTeamTask(@Body() body: UpdateStatusTaskDto,
                 @GetCurrentUserId() userId: number,
                 @UploadedFile() pdf: Express.Multer.File) {
  if(pdf?.filename){
       body.pdf = pdf.filename;
  }            
    return this._ss.statusTeamTask( body, userId);
  }

  // @Roles(ROLE.LAWYER)
  // @Patch(':id')
  // async update(
  //   @Param('id') id: number,
  //   @GetCurrentUserId() userId: number,
  //   @Body() body: UpdateTaskDto,
  //   ) {
  //   return this._ss.update(userId, +id, body);
  // }

  @Roles(ROLE.LAWYER)
  @Delete(':id')
  async remove(@Param('id') id: number, @GetCurrentUserId() userId: number) {
    return this._ss.delete(userId, +id);
  }
}

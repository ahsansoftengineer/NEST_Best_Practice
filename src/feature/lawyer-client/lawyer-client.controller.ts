import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';
import { ApiTags } from '@nestjs/swagger';

import { ROLE } from 'core/enums';
import { InterceptorImage } from 'core/interceptor';
import { Roles } from 'core/decorators';

@Controller('lawyer-client')
@ApiTags('lawyer-client')
export class LawyerClientController {
  constructor(private readonly lawyerClientService: LawyerClientService) {}

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
      return this._ss.signUpLawyer(body);
    } catch (e) {
      HandleUniqueError(e);
    }
  }

  @Get()
  findAll() {
    return this.lawyerClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerClientDto: UpdateLawyerClientDto) {
    return this.lawyerClientService.update(+id, updateLawyerClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerClientService.remove(+id);
  }
}

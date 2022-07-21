import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Public } from 'core/decorators';
import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';
import { UpdateLawyerDto } from './dto/lawyer.dto';
import { LawyerService } from './lawyer.service';

@Controller('lawyer')
export class LawyerController {
  constructor(private readonly _ss: LawyerService) {}
  @Patch()
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(InterceptorImage)
  async update(
    @Body() body: UpdateLawyerDto,
    @Param('id') id: number,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const result = await this._ss.repo.findOneBy({ id });
    if (!result)
      throw new HttpException(
        `${{ id }} does not exsist`,
        HttpStatus.NOT_FOUND,
      );
    if (image) {
      await unlink('public/' + result?.user?.image);
      body.image = image.filename;
    }

    return this._ss.update(id, body, result);
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(){
    return this._ss.getAll()
  }

  @Public()
  @Get('city_specialization')
  @HttpCode(HttpStatus.OK)
  lawyerByCity_Speciality(@Query() {cityId, specializationId}){
    return this._ss.lawyerByCity_Speciality(cityId, specializationId)
  }
}

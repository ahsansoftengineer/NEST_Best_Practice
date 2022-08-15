import {
  Controller,
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
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Roles } from 'core/decorators';

import { ROLE } from 'core/enums';
import { InterceptorPDF } from 'core/interceptor';
import { CasezService } from './casez.service';
import { CreateCasezDto, UpdateCasezDto } from './dto/create-casez.dto';

@Controller('case')
@ApiTags('case')
export class CasezController extends BaseController {
  constructor(public _ss: CasezService) {
    super();
  }

  @Post()
  @Roles(ROLE.ADMIN)
  @UseInterceptors(InterceptorPDF)
  create(
    @Body() body: CreateCasezDto,
    @UploadedFile() pdf: Express.Multer.File,
  ) {
    if (!pdf?.filename)
      throw new HttpException(
        'case reference file is required',
        HttpStatus.FORBIDDEN,
      );
    body.pdf = pdf.filename;
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
  @UseInterceptors(InterceptorPDF)
  async update(
    @Param('id') id: number,
    @Body() body: UpdateCasezDto,
    @UploadedFile() pdf: Express.Multer.File,
  ) {
    return this._ss.updateSimple(
      id,
      body,
      async (fetchedRecord, updateRecord) => {
        if (pdf) {
          this._ss.delFile(fetchedRecord.pdf);
          updateRecord.pdf = pdf.filename;
        }
      },
    );
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this._ss.repo.findOneBy({ id });
    if (result) {
      return this._ss.remove(+id).then((x) => {
        this._ss.delFile(result.pdf);
        return x;
      });
    }
  }
}

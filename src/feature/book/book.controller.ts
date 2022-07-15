import { Controller, Post, Body, Patch, Param, ParseIntPipe, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { InterceptorImage, Interceptor_Files_PDF_Image } from 'core/interceptor';
// import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
@ApiTags('book')
export class BookController extends BaseController{
  constructor(public _ss: BookService) {
    super()
  }
  @Public()
  @Post()
  @UseInterceptors(Interceptor_Files_PDF_Image)
  uploadFile(
    @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] },
    @Body() body: CreateBookDto,
    ) {
      body.image = files.image[0].filename
      body.pdf = files.pdf[0].filename
      return this._ss.createSimple(body);
  }

  @Patch(':id')
  @UseInterceptors(Interceptor_Files_PDF_Image)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateBookDto,
    @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] },
  ) {
    return this._ss.updateSimple(
      id,
      body,
      async (fetchedRecord, updateRecord) => {
        await unlink('public/' + fetchedRecord.image, )
          .then()
          .catch(console.log);
          updateRecord.image = files.image[0].filename;
          updateRecord.pdf = files.pdf[0].filename;
      },
    );
  }

}

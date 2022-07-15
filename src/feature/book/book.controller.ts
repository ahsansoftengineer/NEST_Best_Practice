import { Controller, Post, Body, Patch, Param, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { InterceptorImage, InterceptorPDF } from 'core/interceptor';
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
  @UseInterceptors(InterceptorImage, InterceptorPDF)
  create(
    @Body() body: CreateBookDto,
    @UploadedFile('image') image: Express.Multer.File,
    @UploadedFile('pdf') pdf: Express.Multer.File,
  ) {
    body.image = image.filename;
    body.pdf = pdf.filename;
    console.log(body);
    console.log(image);
    console.log(pdf);
    
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @UseInterceptors(InterceptorImage, InterceptorPDF)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateBookDto,
    @UploadedFile('image') image: Express.Multer.File,
    @UploadedFile('pdf') pdf: Express.Multer.File,
  ) {
    return this._ss.updateSimple(
      id,
      body,
      // (fetchedRecord, updateRecord) => {
      //   unlinkSync('public/' + fetchedRecord.image);
      //   updateRecord.image = image.filename;
      //   updateRecord.pdf = pdf.filename;
      // },
      async (fetchedRecord, updateRecord) => {
        await unlink('public/' + fetchedRecord.image, )
          .then()
          .catch(console.log);
          updateRecord.image = image.filename;
          updateRecord.pdf = pdf.filename;
      },
    );
  }

  

}

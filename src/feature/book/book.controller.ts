import { Controller, Post, Body, Patch, Param, ParseIntPipe, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';
import { extname } from 'path';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

const fileTypeFilter = (req, file, callback) => {
  const ext = extname(file.originalname);
  if ('jpg|jpeg|png|gif|pdf'.indexOf(ext.substring(1, ext.length)) == -1) {
    req.fileValidationError = 'Invalid file type';
    return callback(new Error('Invalid file type'), false);
  }
  return callback(null, true);
};
@Controller('book')
@ApiTags('book')
export class BookController extends BaseController{
  constructor(public _ss: BookService) {
    super()
  }
  @Public()
  @Post()
  @UseInterceptors(FilesInterceptor('files[]', 2, {
      fileFilter: fileTypeFilter,
    })
  )

  create(
    @Body() body: any,
    @UploadedFiles() files ,
    // @UploadedFile('pdf') pdf: Express.Multer.File,
  ) {
    // body.image = image.filename;
    // body.pdf = pdf.filename;
    console.log(body);
    console.log(files);
    // console.log(pdf);
    // console.log(pdf);
    return true
    // return this._ss.createSimple(body);
  }

  @Patch(':id')
  @UseInterceptors(InterceptorImage)
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



import { Controller, Post, Body, Patch, Param, ParseIntPipe, UseInterceptors, UploadedFiles, Catch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Public } from 'core/decorators';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { GlobalExceptionFilter } from 'core/error/GlobalExceptionFilter';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { InterceptorImage, Interceptor_Files_PDF_Image } from 'core/interceptor';
// import { InterceptorImage } from 'core/interceptor';
import { unlink } from 'fs/promises';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
@ApiTags('book')
@Catch(GlobalExceptionFilter)
//QueryFailedError, EntityNotFoundError
export class BookController extends BaseController{
  constructor(public _ss: BookService) {
    super()
  }
  @Public()
  @Post()
  @Roles(ROLE.LAWYER)
  @UseInterceptors(Interceptor_Files_PDF_Image)
  uploadFile(
    @Body() body: CreateBookDto,
    @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] },
    ) {
      body.image = files.image[0].filename
      body.pdf = files.pdf[0].filename
      return this._ss.createSimple(body).catch(e => {
        return HandleUniqueError(e)
      });
        
  }

  @Patch(':id')
  @Roles(ROLE.ADMIN)
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
          if(files?.image[0]) updateRecord.image = files.image[0].filename;
          if(files?.pdf[0]) updateRecord.pdf = files.pdf[0].filename;
      },
    );
  }

}

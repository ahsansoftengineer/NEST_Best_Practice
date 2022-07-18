import { Controller, Post, Body, Patch, Param, UseInterceptors, UploadedFiles, Catch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/base';
import { Roles } from 'core/decorators/roles.decorator';
import { ROLE } from 'core/enums';
import { GlobalExceptionFilter } from 'core/error/GlobalExceptionFilter';
import { HandleUniqueError } from 'core/error/HandleUniqueError';
import { Interceptor_Files_PDF_Image } from 'core/interceptor';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';

@Controller('book')
@ApiTags('book')
@Catch(GlobalExceptionFilter)
//QueryFailedError, EntityNotFoundError
export class BookController extends BaseController{
  constructor(public _ss: BookService) {
    super()
  }


  @Post()
  @Roles(ROLE.ADMIN)
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
    @Param('id') id: number,
    @Body() body: UpdateBookDto,
    @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] },
  ) {
    return this._ss.updateSimple(
      id,
      body,
      async (fetchedRecord, updateRecord) => {
        if(files?.image) {
          this._ss.delFile(fetchedRecord.image)
          updateRecord.image = files.image[0].filename;
        }
        if(files?.pdf) {
          this._ss.delFile(fetchedRecord.pdf)
          updateRecord.pdf = files.pdf[0].filename;
        }
      },
    );
  }

  @Roles(ROLE.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this._ss.repo.findOneBy({id})
    if(result){
      return this._ss.remove(+id).then(x => {
        this._ss.delFile(result.image)
        this._ss.delFile(result.pdf)      
        return x
      })
    }
  }


}

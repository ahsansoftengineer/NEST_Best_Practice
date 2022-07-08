import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileRenameInterceptor } from 'interceptor/file-rename.interceptor';
import { FileImageTypeInterceptor } from 'interceptor/file-image.interceptor';
import * as fs from 'fs'
import { join } from 'path';
@ApiTags('principal')
@Controller('principal')
export class PrincipalController extends BaseController{
  constructor(public _ss: PrincipalService) {
    super()
  }
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'public',
        filename: FileRenameInterceptor,
      }),
      fileFilter: FileImageTypeInterceptor,
    }),
  )
  create(
    @Body() body: CreatePrincipalDto, 
    @UploadedFile() file: Express.Multer.File
  ) {
    body.image = file.filename
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'public',
        filename: FileRenameInterceptor,
      }),
      fileFilter: FileImageTypeInterceptor,
    }),
  )
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdatePrincipalDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log(body, file, id)
    if(body.image && file){
      console.log('in delete');
      
      await fs.unlink(join(__dirname, '..', '..','public', body.image), (err) => {
        if (err) throw err;
        console.log('test1.txt was deleted');
      })
      body.image = file.filename;
      // await fs.unlink(`./public/${body.image}`, (err) => {
      //   console.log(err);
      // })
    }
    return this._ss.updateSimple(id, body);
  }
}
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
import { Uploads } from 'core/Constant';
@ApiTags('principal')
@Controller('principal')
export class PrincipalController extends BaseController{
  constructor(public _ss: PrincipalService) {
    super()
  }
  // @Post()
  // create(@Body() data: CreatePrincipalDto) {
  // }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePrincipalDto) {
    return this._ss.update(id, data);
  }
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'uploads/principal/',
        filename: FileRenameInterceptor,
      }),
      fileFilter: FileImageTypeInterceptor,
    }),
  )
  uploadFile(@Body() body: CreatePrincipalDto, @UploadedFile() file: Express.Multer.File) {
    body.image = file.filename
    console.log(body)
    return this._ss.create(body);
  }
  // @Post()
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  // }

  // @UseInterceptors(FileInterceptor('file'))
  // @Post('file/pass-validation')
  // uploadFileAndPassValidation(
  //   @Body() body: any,
  //   @UploadedFile(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({
  //         fileType: 'json',
  //       })
  //       .build(),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   return {
  //     body,
  //     file: file.buffer.toString(),
  //   };
  // }

  // @UseInterceptors(FileInterceptor('file'))
  // @Post('file/fail-validation')
  // uploadFileAndFailValidation(
  //   @Body() body: SampleDto,
  //   @UploadedFile(
  //     new ParseFilePipeBuilder()
  //       .addFileTypeValidator({
  //         fileType: 'jpg',
  //       })
  //       .build(),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   return {
  //     body,
  //     file: file.buffer.toString(),
  //   };
  // }
}
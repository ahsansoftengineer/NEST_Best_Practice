import { Controller, Post, Body, Patch, Param, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { unlink } from 'fs/promises';
import { FileUploadInterceptor } from 'interceptor/file-upload.interceptor';
@ApiTags('principal')
@Controller('principal')
export class PrincipalController extends BaseController{
  constructor(public _ss: PrincipalService) {
    super()
  }
  @Post()
  @UseInterceptors(FileUploadInterceptor)
  create(
    @Body() body: CreatePrincipalDto, 
    @UploadedFile() file: Express.Multer.File
  ) {
    body.image = file.filename
    return this._ss.createSimple(body);
  }

  @Patch(':id')
  @UseInterceptors(FileUploadInterceptor)
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdatePrincipalDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this._ss.updateSimple(id, body, 
      async (fetchedRecord, updateRecord) => {
        await unlink('public/' + fetchedRecord.image).then().catch(console.log)
        updateRecord.image = file.filename 
    });
  }
}
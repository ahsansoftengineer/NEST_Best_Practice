import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';
import { CreateFamilyMemberDto } from './dto/create-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';
import { BaseController } from 'core/base';
import { ApiTags } from '@nestjs/swagger';

@Controller('family-member')
@ApiTags('family-member')
export class FamilyMemberController extends BaseController {
  constructor(public _ss: FamilyMemberService) {
    super();
  }
  @Post()
  create(@Body() data: CreateFamilyMemberDto) {
    return this._ss.createSimple(data);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFamilyMemberDto,
  ) {
    return this._ss.updateSimple(id, data);
  }
}

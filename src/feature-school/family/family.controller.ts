import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FamilyService } from './family.service';

@Controller('family')
@ApiTags('family')
export class FamilyController {
  constructor(private readonly _ss: FamilyService) {}
  @Get()
  findAll() {
    return this._ss.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._ss.findOne(+id);
  }
}

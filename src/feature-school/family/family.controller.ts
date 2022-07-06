import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'core/BaseController';
import { FamilyService } from './family.service';

@Controller('family')
@ApiTags('family')
export class FamilyController extends BaseController{
  constructor(public _ss: FamilyService) {
    super()
  }
}

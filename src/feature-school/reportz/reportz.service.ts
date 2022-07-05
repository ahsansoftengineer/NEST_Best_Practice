import { Injectable } from '@nestjs/common';
import { BaseService } from 'core/BaseService';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';

@Injectable()
export class ReportzService extends BaseService{
  create(createReportzDto: CreateReportzDto) {
    return 'This action adds a new reportz';
  }


  update(id: number, updateReportzDto: UpdateReportzDto) {
    return `This action updates a #${id} reportz`;
  }

}

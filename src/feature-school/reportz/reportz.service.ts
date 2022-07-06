import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';
import { Reportz } from './entities/reportz.entity';

@Injectable()
export class ReportzService extends BaseService{
  constructor(@InjectRepository(Reportz) public repo: Repository<Reportz>) {
    super()
  }
  create(createReportzDto: CreateReportzDto) {
    return 'This action adds a new reportz';
  }
  update(id: number, updateReportzDto: UpdateReportzDto) {
    return `This action updates a #${id} reportz`;
  }
}

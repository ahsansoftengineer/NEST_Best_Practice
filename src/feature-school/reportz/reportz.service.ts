import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';
import { Reportz } from './entities/reportz.entity';

@Injectable()
export class ReportzService extends BaseService {
  constructor( @InjectRepository(Reportz) public repo: Repository<Reportz>){
    super()
  }
}

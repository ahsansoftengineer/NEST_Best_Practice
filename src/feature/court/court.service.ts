import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { CreateCourtDto } from './dto/create-court.dto';
import { Court } from './entities/court.entity';

@Injectable()
export class CourtService extends BaseService{
  constructor(@InjectRepository(Court) public repo: Repository<Court>){
    super()
  }
  
}

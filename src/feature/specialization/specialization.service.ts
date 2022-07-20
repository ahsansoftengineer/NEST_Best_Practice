import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { Specialization } from './entities/specialization.entity';

@Injectable()
export class SpecializationService extends BaseService{
  constructor(@InjectRepository(Specialization) public repo: Repository<Specialization>){
    super()
  }
}

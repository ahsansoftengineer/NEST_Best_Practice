import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { Casez } from './entities/casez.entity';

@Injectable()
export class CasezService extends BaseService{
  constructor(@InjectRepository(Casez) public repo: Repository<Casez>){
    super()
  }
}

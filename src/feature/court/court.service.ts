import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Court } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CourtService extends BaseService {
  constructor(@InjectRepository(Court) public repo: Repository<Court>) {
    super();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Court } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class CourtService extends BaseService {
  constructor(@InjectRepository(Court) public repo: Repository<Court>) {
    super();
  }
}

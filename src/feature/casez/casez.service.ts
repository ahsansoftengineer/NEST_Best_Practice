import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Casez } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CasezService extends BaseService {
  constructor(@InjectRepository(Casez) public repo: Repository<Casez>) {
    super();
  }
}

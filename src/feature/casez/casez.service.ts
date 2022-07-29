import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Casez } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class CasezService extends BaseService {
  constructor(@InjectRepository(Casez) public repo: Repository<Casez>) {
    super();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService extends BaseService {
  constructor(@InjectRepository(School) public repo: Repository<School>) {
    super();
  }
}

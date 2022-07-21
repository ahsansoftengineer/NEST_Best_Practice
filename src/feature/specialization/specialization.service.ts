import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Specialization } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SpecializationService extends BaseService {
  constructor(
    @InjectRepository(Specialization) public repo: Repository<Specialization>,
  ) {
    super();
  }
}

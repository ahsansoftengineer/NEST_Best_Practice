import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialization } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class SpecializationService extends BaseService {
  constructor(
    @InjectRepository(Specialization) public repo: Repository<Specialization>,
  ) {
    super();
  }
}

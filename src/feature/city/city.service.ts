import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { City } from 'core/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CityService extends BaseService {
  constructor(@InjectRepository(City) public repo: Repository<City>) {
    super();
  }
}

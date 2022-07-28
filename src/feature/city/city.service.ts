import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'core/entities';
import { BaseService } from 'core/service';
import { Repository } from 'typeorm';

@Injectable()
export class CityService extends BaseService {
  constructor(@InjectRepository(City) public repo: Repository<City>) {
    super();
  }
}

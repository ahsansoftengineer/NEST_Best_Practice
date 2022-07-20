import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService extends BaseService{
  constructor(@InjectRepository(City) public repo: Repository<City>){
    super()
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { CreateHomeWorkDto } from './dto/create-home-work.dto';
import { UpdateHomeWorkDto } from './dto/update-home-work.dto';
import { HomeWork } from './entities/home-work.entity';

@Injectable()
export class HomeWorkService extends BaseService {
  constructor( @InjectRepository(HomeWork) public repo: Repository<HomeWork>){
    super()
  }
  create(data: CreateHomeWorkDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateHomeWorkDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}

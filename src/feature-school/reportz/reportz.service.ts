import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';
import { Reportz } from './entities/reportz.entity';

@Injectable()
export class ReportzService extends BaseService {
  constructor( @InjectRepository(Reportz) public repo: Repository<Reportz>){
    super()
  }
  create(data: CreateReportzDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateReportzDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}

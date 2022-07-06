import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateDifferentDbDto } from './dto/create-different-db.dto';
import { UpdateDifferentDbDto } from './dto/update-different-db.dto';
import { DifferentDb } from './entities/different-db.entity';
import { DifferentDataSource } from '.';

@Injectable()
export class DifferentDbService extends BaseService {
  // public repo: Repository<DifferentDb>
  constructor(
   ) {
    super()
    super.repo = DifferentDataSource.getRepository(DifferentDb)
  }
  create(data: CreateDifferentDbDto) {
    console.log(data);
    
    const result = this.repo.create(data);

    return this.repo.save(result);
  }
  async update(id: number, data: UpdateDifferentDbDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseModel } from './BaseModel';

@Injectable()
export class BaseService {
  repo: Repository<BaseModel>
  findAll() {
    console.log('Base Service findAllCalled');
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${id} does not exsist` };
    });
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseModel } from './BaseModel';

export class BaseService {
  public repo: Repository<BaseModel>
  findAll() {
    console.log('Base Service findAllCalled');
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${id} does not exsist` };
    });
  }
  createSimple(data: any) {
      const result = this.repo.create(data);
      return this.repo.save(result);
  }
  async updateSimple(id: number, data: any) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}

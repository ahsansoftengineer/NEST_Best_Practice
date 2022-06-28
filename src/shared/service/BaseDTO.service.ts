import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseDTOService<C, U, M> {
  create(data: C) {
    return {message: 'created'}
  }

  findAll() {
    return {message: 'multiple record'};
  }

  findOne(id: number){
    return {message: 'single record'};
  }

  update(id: number, data: U) {
    return {message: 'updated'}
  }

  remove(id: number) {
    return {message: 'deleted'};
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService extends BaseService {
  constructor( @InjectRepository(Person) public repo: Repository<Person>){
    super()
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { Principal } from './entities/principal.entity';

@Injectable()
export class PrincipalService extends BaseService {
  constructor(@InjectRepository(Principal) public repo: Repository<Principal>) {
    super();
  }
  // addTeacherToPrincipal(){
  //   return this.repo.createQueryBuilder('person')
  //   .andWhere('person.type = "Principal"')
  //   .innerJoinAndSelect('person.teachers', 'teacher')
  //   // .leftJoinAndSelect('person.person', 'Teacher')
  //   .getMany();
  // }
}

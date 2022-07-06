import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Teacher } from 'feature-school/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { Principal } from './entities/principal.entity';

@Injectable()
export class PrincipalService extends BaseService{
  constructor(
    @InjectRepository(Principal) public repo: Repository<Principal>) {
      super()
    }
  create(data: CreatePrincipalDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdatePrincipalDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
  addTeacherToPrincipal(){
    return this.repo.createQueryBuilder('person')
    .andWhere('person.type = "Principal"')
    .innerJoinAndSelect('person.teachers', 'teacher')
    // .leftJoinAndSelect('person.person', 'Teacher')
    .getMany();
  }
}

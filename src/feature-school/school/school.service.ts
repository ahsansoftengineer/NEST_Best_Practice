import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Principal } from 'feature-school/principal/entities/principal.entity';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService extends BaseService{
  constructor(@InjectRepository(School) public repo: Repository<School>) {
    super()
  }
  create(data: CreateSchoolDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateSchoolDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}

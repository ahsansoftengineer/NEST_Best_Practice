
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';

@Injectable()
export class ParentService extends BaseService{
  constructor(@InjectRepository(Parent) public repo: Repository<Parent>) {
    super()
  }
  create(data: CreateParentDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateParentDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}

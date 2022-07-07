import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { Family } from './entities/family.entity';

@Injectable()
export class FamilyService extends BaseService {
  constructor(@InjectRepository(Family) public repo: Repository<Family>) {
    super()
  }
  create(data: CreateFamilyDto) {
    return this.createSimple(data)
  }
  async update(id: number, data: UpdateFamilyDto) {
    return this.updateSimple(id,data)
  }
}

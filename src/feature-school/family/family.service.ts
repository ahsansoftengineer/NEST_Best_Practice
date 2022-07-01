import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFamilyDto } from './dto/create-family.dto';
import { UpdateFamilyDto } from './dto/update-family.dto';
import { Family } from './entities/family.entity';

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(Family)
    private repo: Repository<Family>,
  ) {}
  findAll() {
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${data.id} does not exsist` };
    });
  }
}

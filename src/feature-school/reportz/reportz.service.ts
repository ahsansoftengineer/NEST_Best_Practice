import { Injectable } from '@nestjs/common';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';

@Injectable()
export class ReportzService {
  create(createReportzDto: CreateReportzDto) {
    return 'This action adds a new reportz';
  }

  findAll() {
    return `This action returns all reportz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportz`;
  }

  update(id: number, updateReportzDto: UpdateReportzDto) {
    return `This action updates a #${id} reportz`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportz`;
  }
}

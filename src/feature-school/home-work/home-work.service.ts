import { Injectable } from '@nestjs/common';
import { CreateHomeWorkDto } from './dto/create-home-work.dto';
import { UpdateHomeWorkDto } from './dto/update-home-work.dto';

@Injectable()
export class HomeWorkService {
  create(createHomeWorkDto: CreateHomeWorkDto) {
    return 'This action adds a new homeWork';
  }

  findAll() {
    return `This action returns all homeWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homeWork`;
  }

  update(id: number, updateHomeWorkDto: UpdateHomeWorkDto) {
    return `This action updates a #${id} homeWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeWork`;
  }
}

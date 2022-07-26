import { Injectable } from '@nestjs/common';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';
import { UpdateLawyerClientDto } from './dto/update-lawyer-client.dto';

@Injectable()
export class LawyerClientService {
  create(createLawyerClientDto: CreateLawyerClientDto) {
    return 'This action adds a new lawyerClient';
  }

  findAll() {
    return `This action returns all lawyerClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawyerClient`;
  }

  update(id: number, updateLawyerClientDto: UpdateLawyerClientDto) {
    return `This action updates a #${id} lawyerClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyerClient`;
  }
}

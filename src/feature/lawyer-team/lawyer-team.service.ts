import { Injectable } from '@nestjs/common';

@Injectable()
export class LawyerTeamService {
  create(data) {
    return 'This action adds a new lawyerTeam';
  }

  findAll() {
    return `This action returns all lawyerTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawyerTeam`;
  }

  update(id: number, data) {
    return `This action updates a #${id} lawyerTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyerTeam`;
  }
}

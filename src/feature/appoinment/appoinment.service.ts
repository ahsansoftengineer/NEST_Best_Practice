import { Injectable } from '@nestjs/common';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';

@Injectable()
export class AppoinmentService extends BaseService {
  constructor(public repos: RepoService) {
    super();
    super.repo = this.repos.appointment;
  }
  adminList(){
    return this.repos.appointment.findBy({})
  }
  lawyerList(){
    return this.repos.appointment.findBy({})
  }

}

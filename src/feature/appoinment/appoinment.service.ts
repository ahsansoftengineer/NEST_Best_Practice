import { Injectable } from '@nestjs/common';
import { BaseService } from 'core/base';
import { RepoService } from 'core/shared/service/repo.service';

@Injectable()
export class AppoinmentService extends BaseService {
  constructor(public repos: RepoService) {
    super();
    super.repo = this.repos.appointment;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepoService } from 'core/shared/service/repo.service';

// @Injectable()
export class CoreService {
  @Inject(RepoService) public repos: RepoService;
}

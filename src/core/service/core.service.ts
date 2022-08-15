import { Inject, Logger } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { RepoService } from 'core/shared/service/repo.service';
import { SendgridService } from 'core/shared/service/sandgrid.service';

// @Injectable()
export class CoreService {
  // @Inject Doesn't Work 
  @Inject(RepoService) public repos: RepoService;
  @Inject(SendgridService) public mail: SendgridService
  logger: Logger
  constructor(){
    this.logger = new Logger();
    // this.repos = injector.getClassDependencies()
  }

}

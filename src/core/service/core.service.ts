import { Inject, Logger } from '@nestjs/common';
import { RepoService } from 'core/shared/service/repo.service';
import { SendgridService } from 'core/shared/service/sandgrid.service';

// @Injectable()
export class CoreService {
  @Inject(RepoService) public repos: RepoService;
  @Inject(SendgridService) public mail: SendgridService
  logger: Logger
  constructor(){
    this.logger = new Logger();
  }

}

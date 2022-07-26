import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RepoService } from "core/shared/service/repo.service";

@Injectable()
export class CoreService {
  @InjectRepository(RepoService) public repos: RepoService
}
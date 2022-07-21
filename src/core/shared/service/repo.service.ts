import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Court, Lawyer, Specialization, User } from "core/entities";
import { Repository } from "typeorm";

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(User) public user: Repository<User>,
    @InjectRepository(Lawyer) public lawyer: Repository<Lawyer>,
    @InjectRepository(Court) public court: Repository<Court>,
    @InjectRepository(Specialization) public specialization: Repository<Specialization>,
  ) {}
}

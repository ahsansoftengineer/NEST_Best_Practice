import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Court,
  Lawyer,
  Specialization,
  User,
  Appoinment,
  LawyerTeam,
  Book,
  City,
  News,
  Task,
  Casez,
  LawyerClient,
} from 'core/entities';
import { LawyerCase } from 'core/entities/lawyer-case.entity';
import { Repository } from 'typeorm';

@Injectable({})
export class RepoService {
  constructor(
    @InjectRepository(Appoinment) public appointment: Repository<Appoinment>,
    @InjectRepository(Book) public book: Repository<Book>,
    @InjectRepository(Casez) public casez: Repository<Casez>,
    @InjectRepository(City) public city: Repository<City>,
    @InjectRepository(Court) public court: Repository<Court>,
    @InjectRepository(News) public news: Repository<News>,
    @InjectRepository(Specialization)
    public specialization: Repository<Specialization>,
    @InjectRepository(Task) public task: Repository<Task>,

    @InjectRepository(User) public user: Repository<User>,
    @InjectRepository(Lawyer) public lawyer: Repository<Lawyer>,
    @InjectRepository(LawyerTeam) public lawyerTeam: Repository<LawyerTeam>,
    @InjectRepository(LawyerClient)
    public lawyerClient: Repository<LawyerClient>,
    @InjectRepository(LawyerCase) public lawyerCase: Repository<LawyerCase>,
  ) {
  }
}

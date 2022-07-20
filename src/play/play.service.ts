import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpLawyerDto } from 'auth/dto/sign-up-lawyer.dto';
import { Lawyer, User } from 'core/entities';
import { Repository } from 'typeorm';
import { CreatePlayDto } from './dto/create-play.dto';
import { UpdatePlayDto } from './dto/update-play.dto';

@Injectable()
export class PlayService {
  constructor(
    @InjectRepository(User) public user: Repository<User>,
    @InjectRepository(Lawyer) public lawyer: Repository<Lawyer>
  ){

  }
 check11(data: SignUpLawyerDto){
  
  return this.user.create(data)
 }
}

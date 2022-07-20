import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
 check11(data: any = {}){
  return this.user.create(data)
 }
}

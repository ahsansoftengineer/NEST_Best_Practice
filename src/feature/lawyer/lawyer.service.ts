import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lawyer } from 'core/entities';
import { Repository } from 'typeorm';
import { UpdateLawyerDto } from './dto/lawyer.dto';
import  * as argon from 'argon2';

@Injectable()
export class LawyerService{
  constructor(
    @InjectRepository(Lawyer) public repo: Repository<Lawyer>
    ){
  }
  
  async update(id: number, data: UpdateLawyerDto, oldData: Lawyer){
    const hashResult = await argon.hash(data.password);
    if(oldData.user.password != hashResult) data.password = hashResult
    else delete data.password
    delete data.email
    return this.repo.update({id}, {...data});
  }
 
}

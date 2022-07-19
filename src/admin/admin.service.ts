import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'auth/entities/user.entity';
import { ROLE, STATUS } from 'core/enums';
import { Repository } from 'typeorm';
import { ChangeStatusDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User) public repoUser: Repository<User>){
  }
  private userSelectiveColumns = {
    name: true,
    email: true,
    gender: true,
    city: true,
    mobile: true,
    court: true,
    image: true,
    role: true,
    status: true,

  }
  async changeStatusUser({id, status}: ChangeStatusDto){
    const user =  await this.repoUser.findOneBy({id})
    if(!user) throw new HttpException('User does not Exsist', HttpStatus.NOT_FOUND)
    return this.repoUser.update(id, {status})
  } 

  async getLawyers(){
    return this.repoUser.find({
      where: {role: ROLE.LAWYER},
      select: this.userSelectiveColumns
    })
  }

  async getLawyer(id: number){
    return this.repoUser.findOne({
      where: {id, role: ROLE.LAWYER}, 
      select: this.userSelectiveColumns
    })
  } 
}

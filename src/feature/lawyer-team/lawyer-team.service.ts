import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtPayload } from 'auth/types';
import {
  argon,
  deSearalizeUser,
  deSearalizeUsers,
  generatePassword,
  searalizeUser,
  throwForbiddenException,
} from 'core/constant';
import { LawyerTeam } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { CreateLawyerTeamDto } from './dto/lawyer-team.dto';

@Injectable()
export class LawyerTeamService extends BaseService {
  constructor(public repos: RepoService) {
    super()
    this.repo = this.repos.user
  }
  async create(data: CreateLawyerTeamDto, user: JwtPayload) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);
    const lawyerTeam: LawyerTeam = { 
      lawyerId:user.sub,
      responsibility: data.responsibility,
      timing: data.timing,
      amount: data.amount,
      user: searalizeUser(data, ROLE.TEAM, STATUS.ACTIVE)
    };
    const password = await generatePassword();
    const hashResult = await argon.hash(password);
    lawyerTeam.user.password = hashResult;

    try{
      const create = await this.repos.lawyerTeam.create({ ...lawyerTeam });
      // const result = await this.repos.lawyerTeam.save(create).catch((error) => 
      const result: any = await this.repos.lawyerTeam.save(create).then(deSearalizeUser).catch((error) =>{
        console.log({ db_error: error });
        throw new ForbiddenException('Credentials incorrect');
      });    
      await this.mail.teamAccountByLawyer({
        to:result?.email,
        name:result?.name,
        password,
        lawyer:user.name//lawyer?.user?.name,
      })
        // const {email, id, name} =  lawyer.user
        return result 
      

    } catch(e){

    } 

  }

  getLawyerMembers(lawyerId) {
    console.log({ lawyerId });

    return this.repos.lawyerTeam
      .findBy({ lawyerId })
      .then((x) => deSearalizeUsers(x));
  }

  getLawyerMember(lawyerId, id) {
    return this.repos.lawyerTeam
      .createQueryBuilder('l')
      .where({
        lawyerId,
        id,
      })
      .getOne()
      .then((x) => deSearalizeUser(x));
  }
  // TODO: NOT WORK CHEQUE THE QUERY BUILDER DOCS
  deleteLawyerMember(lawyerId, id) {
    return this.repos.lawyerTeam
      .createQueryBuilder('l')
      .delete()
      .where('id = :id AND lawyerId = :lawyerId', { id, lawyerId });
  }

  async updateteam(id: number, data: any, cb = null) {
    let result: any = await this.findOne(id);
    if (cb) await cb(result, data);
    const hashResult = await argon.hash(data.password);
    data.password = hashResult
    if (result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }

}

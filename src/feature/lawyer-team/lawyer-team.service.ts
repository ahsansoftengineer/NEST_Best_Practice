import { ForbiddenException, Injectable } from '@nestjs/common';
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
import { CreateLawyerTeamDto } from './dto/lawyer-team.dto';

@Injectable()
export class LawyerTeamService extends BaseService {
  async create(data: CreateLawyerTeamDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);
    // TODO:fix this later
    const lawyer = await this.repos.lawyer.findOneBy({id: data.lawyerId})
    throwForbiddenException(!lawyer)
    data.lawyerId = lawyer.id
    const lawyerTeam: LawyerTeam = { 
      lawyerId:data.lawyerId,
      responsibility: data.responsibility,
      timing: data.timing,
      amount: data.amount,
      user: searalizeUser(data, ROLE.TEAM, STATUS.NONE)
    };

    // TODO: WORK HERE SET RANDOM PASSWORD
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
      return result;
    } catch(e){
      // TODO: ROLED BACK TRANSACTION

    }
  }

  // TODO: NOT WORK CHEQUE THE QUERY BUILDER DOCS
  getLawyerMembers(lawyerId) {
    console.log({ lawyerId });

    return this.repos.lawyerTeam
      .findBy({ lawyerId })
      .then((x) => deSearalizeUsers(x));
  }

  // TODO: NOT WORK CHEQUE THE QUERY BUILDER DOCS
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
}

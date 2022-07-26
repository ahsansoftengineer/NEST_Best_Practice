import { ForbiddenException, Injectable } from '@nestjs/common';
import { BaseService } from 'core/base';
import { deSearalizeUser, deSearalizeUsers, searalizeUser, throwForbiddenException } from 'core/constant';
import { LawyerClient } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';

@Injectable()
export class LawyerClientService extends BaseService {
  
  async create(data: CreateLawyerClientDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser)
    const user = searalizeUser(data, ROLE.CLIENT_LAWYER, STATUS.NONE)
    const lawyerTeam: LawyerClient = {
      lawyerId: data.lawyerId,
      type: data.type,
      suite: data.suite,
      user
    };
    // TODO: WORK HERE SET RANDOM PASSWORD
    // const hashResult = await argon.hash(data.password);
    // lawyerTeam.user.password = hashResult
    console.log({ lawyerTeam });

    const create = this.repos.lawyerTeam.create({ ...lawyerTeam });
    const save = await this.repos.lawyerTeam.save(create).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });
    return save;
  }

  getLawyerMembers(lawyerId){
    return this.repos.lawyerTeam.findBy({lawyerId}).then(x => deSearalizeUsers(x))
  }

  getLawyerMember(lawyerId, id){
    return this.repos.lawyerTeam.findOneBy({lawyerId, id}).then(x => deSearalizeUser(x))
  }

  deleteLawyerMember(lawyerId, id){
    return this.repos.lawyerTeam.delete({lawyerId, id})
  }
}

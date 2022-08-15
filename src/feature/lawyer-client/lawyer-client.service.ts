import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  deSearalizeUser,
  deSearalizeUsers,
  searalizeUser,
  throwForbiddenException,
} from 'core/constant';
import { LawyerClient } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { BaseService } from 'core/service';

@Injectable()
export class LawyerClientService extends BaseService {
  // constructor(public repos: RepoService){}

  async create(data: any) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);
    const user = searalizeUser(data, ROLE.CLIENT_LAWYER, STATUS.NONE);
    const lawyerClient: LawyerClient = {
      lawyerId:data.lawyerId,
      type: data.type,  
      suite: data.suite,
      caseNo:data.caseNo,
      user,
    };
    // TODO: WORK HERE SET RANDOM PASSWORD
    // const hashResult = await argon.hash(data.password);
    // lawyerClient.user.password = hashResult
    console.log({ lawyerClient });

    const create = this.repos.lawyerClient.create({ ...lawyerClient });
    const save = await this.repos.lawyerClient.save(create).then(deSearalizeUser).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });
    return save
  }

  getLawyerClients(id) {
    return this.repos.lawyerClient
      .findBy({ lawyerId: id})
      .then((x) => deSearalizeUsers(x));
  }

  getLawyerClient(lawyerId, id) {
    return this.repos.lawyerClient
      .findOneBy({ lawyer: { id: lawyerId }, id })
      .then((x) => deSearalizeUser(x));
  }

  deleteLawyerMember(lawyerId, id) {
    return this.repos.lawyerClient.delete({ lawyer: { id: lawyerId }, id });
  }
}

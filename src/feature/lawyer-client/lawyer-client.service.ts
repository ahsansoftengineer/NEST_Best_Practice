import { ForbiddenException, Injectable } from '@nestjs/common';
import { BaseService } from 'core/base';
import {
  deSearalizeUser,
  deSearalizeUsers,
  searalizeUser,
  throwForbiddenException,
} from 'core/constant';
import { LawyerClient } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';

@Injectable()
export class LawyerClientService extends BaseService {
  async create(data: CreateLawyerClientDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);
    const user = searalizeUser(data, ROLE.CLIENT_LAWYER, STATUS.NONE);
    const lawyerClient: LawyerClient = {
      lawyerId: data.lawyerId,
      type: data.type,
      suite: data.suite,
      user,
    };
    // TODO: WORK HERE SET RANDOM PASSWORD
    // const hashResult = await argon.hash(data.password);
    // lawyerClient.user.password = hashResult
    console.log({ lawyerClient });

    const create = this.repos.lawyerClient.create({ ...lawyerClient });
    const save = await this.repos.lawyerClient.save(create).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });
    return save;
  }

  getLawyerClients(id) {
    return this.repos.lawyerClient
      .findBy({ lawyer: { id } })
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

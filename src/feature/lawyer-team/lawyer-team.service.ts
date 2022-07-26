import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignUpLawyerDto } from 'auth/dto/sign-up-lawyer.dto';
import { BaseService } from 'core/base';
import { argon, searalizeUser } from 'core/constant';
import { LawyerTeam } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';
import { In } from 'typeorm';
import { CreateLawyerTeamDto } from './dto/lawyer-team.dto';

@Injectable()
export class LawyerTeamService extends BaseService {

  async create(data: CreateLawyerTeamDto) {
    const hashResult = await argon.hash(data.password);

    const existUser = await this.repos.user.findOneBy({ email: data.email });

    if (existUser)
      throw new ForbiddenException('Lawyer already Exsist with the ' + data.email);

    const user = searalizeUser(data, ROLE.TEAM, STATUS.NONE)
    // searialization

    const lawyerTeam: LawyerTeam = {
      lawyerId: data.lawyerId,
      responsibility: data.responsibility,
      timing: data.timing,
      amount: data.amount,
      user
    };
    console.log({ lawyerTeam });

    const create = this.repos.lawyerTeam.create({ ...lawyerTeam });
    const save = await this.repos.lawyerTeam.save(create).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return save;
  }
}

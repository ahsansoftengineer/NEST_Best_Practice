import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignUpLawyerDto } from 'auth/dto/sign-up-lawyer.dto';
import { BaseService } from 'core/base';
import { argon } from 'core/constant';
import { In } from 'typeorm';
import { CreateLawyerTeamDto } from './dto/lawyer-team.dto';

@Injectable()
export class LawyerTeamService extends BaseService {

  async create(data: CreateLawyerTeamDto) {
    const hashResult = await argon.hash(data.password);

    const existUser = await this.repos.user.findOneBy({ email: data.email });

    if (existUser)
      throw new ForbiddenException('Lawyer already Exsist with the ' + data.email);
    // searialization
    console.log(courts);

    const lawyerResult: Lawyer = {
      specialization,
      court: courts,
      user,
    };
    console.log({ lawyerResult });

    const lawyer = this.repos.lawyer.create({ ...lawyerResult });
    await this.repos.lawyer.save(lawyer).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return this.returnGeneratedToken(lawyer.user);
  }

  update(id: number, data) {
    return `This action updates a #${id} lawyerTeam`;
  }
}

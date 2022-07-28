import { ForbiddenException, Injectable } from '@nestjs/common';
import { argon, searalizeUser, throwForbiddenException } from 'core/constant';
import { Appoinment, User } from 'core/entities';
import { ROLE, STATUS, STATUS_APPOINT } from 'core/enums';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { Not } from 'typeorm';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';

@Injectable()
export class AppoinmentService extends BaseService {
  constructor(public repos: RepoService) {
    super();
    super.repo = this.repos.appointment;
  }
  adminList(){
    return this.repos.appointment.find({where:{status:Not(STATUS_APPOINT.DIRECT)}})
  }
  lawyerList(){
    return this.repos.appointment.findBy({status:STATUS_APPOINT.DIRECT})
  }

  async create(data: CreateAppoinmentDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);

    const user: User = searalizeUser(data, ROLE.CLIENT_APPONITMENT, STATUS.PENDING);
    user.password = 'No Password for this User'
    const lawyer = await this.repos.lawyer.findOneBy({
      id: data.lawyerId,
    });
    
    throwForbiddenException(lawyer)

    const appointmentResult: Appoinment = {
      user,
      lawyerId: data.lawyerId,
      date: data.date,
      time: data.time,
      status: STATUS_APPOINT.PENDING,
      title: data.title,
      desc: data.desc
    };

    const appoint = this.repos.lawyer.create({ ...appointmentResult });
    await this.repos.lawyer.save(appoint).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

  }
}

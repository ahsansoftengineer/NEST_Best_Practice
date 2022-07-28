import { ForbiddenException, Injectable } from '@nestjs/common';
import { searalizeUser, throwForbiddenException } from 'core/constant';
import { Appoinment, User } from 'core/entities';
import { GENDER, ROLE, STATUS, STATUS_APPOINT } from 'core/enums';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { In, Not } from 'typeorm';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';

@Injectable()
export class AppoinmentService extends BaseService {
  constructor(public repos: RepoService) {
    super();
    super.repo = this.repos.appointment;
  }
  adminList(status: STATUS_APPOINT){
    const result = this.repos.appointment
    if(!status) return result.find()
    else return result.find({where:{status}})
  }
  lawyerList(status: STATUS_APPOINT){
    const result = this.repos.appointment
    if(!status) return result.find({
      where:[
        { status:STATUS_APPOINT.DIRECT },
        { status:STATUS_APPOINT.ACCEPT },
        { status:STATUS_APPOINT.REJECT },
      ]
    })
    else return result.find({where:{status}})
  }

  async create(data: CreateAppoinmentDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);

    const user: User = searalizeUser(data, ROLE.CLIENT_APPONITMENT, STATUS.NONE);
    user.password = 'No Password for this User'
    const lawyer = await this.repos.lawyer.findOneBy({
      id: data.lawyerId, user: { status: STATUS.ACTIVE}
    });
    if(!lawyer) throw new ForbiddenException('invalid Lawyer provided')
    const appointmentResult: Appoinment = { 
      user,
      lawyerId: data.lawyerId,
      date: data.date,
      time: data.time,
      status: STATUS_APPOINT.PENDING,
      title: data.title,
      desc: data.desc
    };
    
    const appoint = await this.repos.appointment.create({ ...appointmentResult });
    const result = await this.repos.appointment.save(appoint).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });
    if(result){
      // send Email to Client of Pending State of Case Registration
    }
    return result

  }

  statusAdmin({status, id}){
    return this.repos.appointment.update({id}, {status})
  }

  statusLawyer({status, id}){
    return this.repos.appointment.update({id}, {status})
  }
}

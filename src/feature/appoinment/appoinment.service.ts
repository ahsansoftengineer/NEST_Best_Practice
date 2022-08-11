import { ForbiddenException, Injectable } from '@nestjs/common';
import { deSearalizeUser, searalizeUser, throwForbiddenException } from 'core/constant';
import { Appoinment, User } from 'core/entities';
import { ROLE, STATUS, STATUS_APPOINT } from 'core/enums';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';

@Injectable()
export class AppoinmentService extends BaseService {
  constructor(public repos: RepoService) {
    super();
    super.repo = this.repos.appointment;
  }
  adminList(status: STATUS_APPOINT) {
    const result = this.repos.appointment;
    if (!status) return result.find();
    else return result.find({ where: { status } });
  }
  lawyerList(status: STATUS_APPOINT) {
    const result = this.repos.appointment;
    if (!status)
      return result.find({
        where: [ 
          { status: STATUS_APPOINT.DIRECT },
          { status: STATUS_APPOINT.ACCEPT }, 
          { status: STATUS_APPOINT.REJECT },
        ],
      });
    else return result.find({ where: { status } });
  }

  async create(data: CreateAppoinmentDto) {
    const existUser = await this.repos.user.findOneBy({ email: data.email });
    throwForbiddenException(existUser);

    const user: User = searalizeUser(
      data,
      ROLE.CLIENT_APPONITMENT,
      STATUS.NONE,
    );
    user.password = 'No Password for this User';
    const lawyer = await this.repos.lawyer.findOneBy({
      id: data.lawyerId,
      user: { status: STATUS.ACTIVE },
    });
    if (!lawyer) throw new ForbiddenException('invalid Lawyer provided');
    const d: Appoinment = {
      user,
      lawyerId: data.lawyerId,
      date: data.date,
      time: data.time,
      status: STATUS_APPOINT.PENDING,
      title: data.title,
      desc: data.desc,
    };
    try{
      const appoint = await this.repos.appointment.create(d);
      let result: any = await this.repos.appointment.save(appoint).then(deSearalizeUser)
      await this.mail.appointmentUser({
        to:result?.email,
        name:result?.name,
      })
  
      result = deSearalizeUser(result)
      if (result) {
        // send Email to Client of Pending State of Case Registration
      }
      return result;
    }catch(e){

    }
   
  }

   async statusAdmin({ id, status,  name, email, date = undefined, time = undefined,feedback=undefined }) {
    const update: any = {status,feedback}
    if(date) update.date = date
    if(time) update.time = time
    // console.log({id, status, name, email, date, time});
    
    try {
      const result = await this.repos.appointment.update({ id }, update);
      await this.mail.appointmentReSchedule({
        to: email, status ,date, time, name,feedback
      })
      return result;
    } catch (e) {
      
    }
  }
  async statusLawyer({ id, status, name, email, feedback }) {
    try {
      const result = await this.statusAdmin({id, status, name, email, feedback})
      await this.mail.appointmentAcceptRejectByLawyer({
        to: email, status , name,  date:'', time:'',feedback
      })
      return result;

    } catch (error) {
      
    }
  }
}
